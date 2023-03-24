export let cur: any, prev: any;
export default class StocksHistory {
  public static async getMultipleStocks(): Promise<any[]> {
    const dataSources: any[] = [await this.getStockData()];

    return new Promise<any[]>((resolve, reject) => {
      resolve(dataSources);
    });
  }
  public static async getStockData(): Promise<StockItem[]> {
    let url = "https://retoolapi.dev/hx4PNG/dayapi";
    let response = await fetch(url);
    let jsonData = await response.json();
    let stockData = this.convertData(jsonData);
    this.extendData(stockData);
    (stockData as any).__dataIntents = {
      close: ["SeriesTitle/UNOfinance"],
    };
    return new Promise<StockItem[]>((resolve, reject) => {
      resolve(stockData);
      cur = stockData[stockData.length - 1].close;
      prev = stockData[stockData.length - 2].close;
    });
  }
  public static convertData(jsonData: any[]): StockItem[] {
    let stockItems: StockItem[] = [];
    let i = 0;
    for (let json of jsonData) {
      let parts = json.key.split(" ");
      let item = new StockItem();
      const date = parts[0].split("-");
      let cur = new Date(date[2], date[1], date[0]).getTime();
      item.date = new Date(cur + i * 60 * 60 * 1000);
      item.open = parseFloat(json.open);
      item.high = parseFloat(json.high);
      item.low = parseFloat(json.low);
      item.close = parseFloat(json.close);
      item.volume = parseInt(json.volume);
      stockItems.push(item);
      i += 1;
    }

    return stockItems;
  }
  public static extendData(jsonData: any[]): any[] {
    for (let j = 0; j < 5; j++) {
      let nextMonthData: StockItem[] = [];
      for (let json of jsonData) {
        let date = json.date;
        let newDate = this.addMonths(date, 2);
        let newItem = { ...json, date: newDate };
        nextMonthData.push(newItem);
      }
      jsonData.push(...nextMonthData);
    }
    console.log("new Data", jsonData);
    return jsonData;
  }
  public static addMonths(date: Date, months: number) {
    date.setMonth(date.getMonth() + months);

    return date;
  }
}

export class StockItem {
  public open?: number;
  public close?: number;
  public high?: number;
  public low?: number;
  public volume?: number;
  public date?: Date;
}
