/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  IgrFinancialChart,
  IgrFinancialChartModule,
} from "igniteui-react-charts";
import StocksHistory from "./StocksHistory";
import { GraphContainer } from "./style";
import { Maximize2, PlusCircle } from "react-feather";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

IgrFinancialChartModule.register();

function FinancialChartMultipleData() {
  const [data, setData] = useState([{}]);
  const [dataCopy, setDataCopy] = useState([{}]);
  const [active, setActive] = useState(2);
  useEffect(() => {
    const fetchData = async () => {
      const stocks = await StocksHistory.getStockData();
      setData(stocks.slice(-69));
      setDataCopy(stocks);
    };
    fetchData();
  }, []);
  console.log(data);
  const handle = useFullScreenHandle();
  function getRequireddata(value: number) {
    setData(dataCopy.slice(-1 * value));
  }
  return (
    <GraphContainer>
      <div className="container sample">
        <div className="container" style={{ height: "500px", width: "100%" }}>
          <div className="contents">
            <div className="screen">
              <div className="full-screen">
                <Maximize2 color="#6F7177" size={18} />
                <span className="text" onClick={handle.enter}>
                  Full Screen
                </span>
              </div>
              <div className="full-screen">
                <PlusCircle color="#6F7177" size={18} />
                <span className="text">Compare</span>
              </div>
            </div>
            <div className="rangeSelector">
              <button
                className={`${active === 1 ? "active-btn" : "button-day"}`}
                onClick={() => {
                  getRequireddata(24);
                  setActive(1);
                }}
              >
                1d
              </button>
              <button
                className={`${active === 2 ? "active-btn" : "button-day"}`}
                onClick={() => {
                  getRequireddata(69);
                  setActive(2);
                }}
              >
                3d
              </button>
              <button
                className={`${active === 3 ? "active-btn" : "button-day"}`}
                onClick={() => {
                  getRequireddata(161);
                  setActive(3);
                }}
              >
                1w
              </button>
              <button
                className={`${active === 4 ? "active-btn" : "button-day"}`}
                onClick={() => {
                  getRequireddata(200);
                  setActive(4);
                }}
              >
                1m
              </button>
              <button
                className={`${active === 5 ? "active-btn" : "button-day"}`}
                onClick={() => {
                  getRequireddata(300);
                  setActive(5);
                }}
              >
                6m
              </button>
              <button
                className={`${active === 6 ? "active-btn" : "button-day"}`}
                onClick={() => {
                  getRequireddata(400);
                  setActive(6);
                }}
              >
                1y
              </button>
              <button
                className={`${active === 7 ? "active-btn" : "button-day "}`}
                onClick={() => {
                  getRequireddata(500);
                  setActive(7);
                }}
              >
                max
              </button>
            </div>
          </div>
          <FullScreen handle={handle} className="chart">
            <div className="chart">
              <IgrFinancialChart
                width="100%"
                height="100%"
                chartType="Line"
                thickness={2}
                dataSource={data}
                volumeType="column"
                volumeOutlines="#E2E4E7"
                volumeBrushes="#E2E4E7"
                alignsGridLinesToPixels="true"
                xAxisLabelTextColor="transparent"
                yAxisLabelTextColor="transparent"
                yAxisMajorStroke="transparent"
                xAxisMajorStroke="#E2E4E7"
                xAxisStroke="transparent"
                zoomSliderType="none"
                toolTipType="none"
                crosshairsAnnotationXAxisBackground="transparent"
                crosshairsAnnotationXAxisTextColor="transparent"
                crosshairsAnnotationYAxisBackground="#1A243A"
                crosshairsAnnotationYAxisTextColor="#ffff"
                // isHorizontalZoomEnabled="false"
                // isVerticalZoomEnabled="false"
                brushes="#4b40ee"
              />
            </div>
          </FullScreen>
        </div>
      </div>
    </GraphContainer>
  );
}

export default FinancialChartMultipleData;

// {["linear-gradient(to bottom, blue 10%, white 100%) "]}
