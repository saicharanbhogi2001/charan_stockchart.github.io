/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { DashboardContainer } from "./style";
import FinancialChartMultipleData from "../atom/chart";
import StocksHistory from "../atom/chart/StocksHistory";
import { cur, prev } from "../atom/chart/StocksHistory";
function ChartDashboard() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [data, setData] = useState([{}]);
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const fetchData = async () => {
      const stocks = await StocksHistory.getStockData();
      setData(stocks);
    };
    fetchData();
  }, []);
  return (
    <DashboardContainer>
      <div className="header">
        <span className="header-amounthelper">₹</span>
        <span className="header-amount">{parseFloat(cur).toFixed(2)}</span>
      </div>
      <div className="header-helper">
        <p className="header-helpertext">
          {cur - prev > 0 || "+"} {(cur - prev).toFixed(3)}
          {" (" + (((cur - prev) / cur) * 100).toFixed(2) + "%)"}
        </p>
      </div>
      <div className="navigation">
        <ul>
          <li className={activeIndex === 0 ? "active" : ""}>
            <a href="#" onClick={() => handleItemClick(0)}>
              Summary
            </a>
          </li>
          <li className={activeIndex === 1 ? "active" : ""}>
            <a href="#" onClick={() => handleItemClick(1)}>
              Chart
            </a>
          </li>
          <li className={activeIndex === 2 ? "active" : ""}>
            <a href="#" onClick={() => handleItemClick(2)}>
              Statistcs
            </a>
          </li>
          <li className={activeIndex === 3 ? "active" : ""}>
            <a href="#" onClick={() => handleItemClick(3)}>
              Analysis
            </a>
          </li>
          <li className={activeIndex === 4 ? "active" : ""}>
            <a href="#" onClick={() => handleItemClick(4)}>
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="chart-block">
        <FinancialChartMultipleData />
      </div>
    </DashboardContainer>
  );
}

export default ChartDashboard;
