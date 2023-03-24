import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const DashboardContainer = styled(Box)`
  height: 900px;
  width: 900px;
  /* background-color: yellow; */
  /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); */
  /* border: 2px solid black; */
  margin: auto;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  .header {
    width: 100%;
    background: white;
    display: flex;
    align-items: flex-start;
  }
  .header-amount {
    font-family: "Circular Std", sans-serif;
    font-size: 70px;
    font-weight: 400;
  }
  .header-amounthelper {
    font-family: "Circular Std", sans-serif;
    color: #bdbebf;
    font-weight: 500;
    margin-top: 11px;
    font-size: 24px;
  }
  .header-helpertext {
    font-family: "Circular Std", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #67bf6b;
  }
  p {
    padding: 0;
    margin: 0;
  }
  .navigation {
    border-bottom: 1px solid #eff1f3;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: "Circular Std", sans-serif;
    font-weight: 400;
    font-size: 18px;
  }

  li {
    float: left;
  }
  li:first-child a {
    padding-left: 0;
  }

  li a {
    display: block;
    color: #6f7177;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  .active {
    border-bottom: 3px solid #4b40ee;
  }
  .chart-block {
    height: 60%;
    width: 100%;
    margin-top: 10px;
  }
`;
