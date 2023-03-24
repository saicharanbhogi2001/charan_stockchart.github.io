import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const GraphContainer = styled(Box)`
  .financialChartIndicatorMenu,
  .financialChartTypePicker {
    display: none !important;
  }
  .financialChartToolbar {
    border: none !important;
  }
  .financialChartRangeSelector {
    display: none;
  }
  .financialChartRangeSelector Input:checked + Span {
    color: white;
    background-color: #4b40ee;
    border-radius: 5px;
  }
  .text {
    color: "#6F7177";
    font-size: 18px;
    font-family: "Circular Std", sans-serif;
  }
  .full-screen {
    width: 120px;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-around;
  }
  .contents {
    width: 100%;
    display: flex;
    gap: 10px;
    transform: translateY(35px);
  }
  .screen {
    display: flex;
    width: 35%;
    gap: 10px;
  }
  .rangeSelector {
    display: flex;
    justify-content: space-around;
    width: 60%;
  }
  .chart {
    height: 100%;
    width: 100%;
    margin-left: -19px;
  }
  .fullscreen-enabled {
    background: #ffff;
  }

  .active-btn {
    color: white;
    background-color: #4b40ee;
    border-radius: 5px;
    border: none;
    font-size: 15px;
    height: 30px;
    width: 50px;
    font-family: "Circular Std", sans-serif;
    cursor: pointer;
  }
  .button-day {
    font-family: "Circular Std", sans-serif;
    color: #6f7177;
    font-size: 15px;
    height: 30px;
    width: 50px;
    border: none;
    background-color: #ffff;
    font-weight: 500;
    cursor: pointer;
  }
`;
