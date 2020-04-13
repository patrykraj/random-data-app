import React from "react";
import Chart from "../components/Chart";
import "../styles/Stats.css";

const Stats = (props) => {
  return (
    <div className="chart--container page--container">
      <h1 className="stats--header">Annual Savings ($)</h1>
      <Chart chartData={props.chartData} />
    </div>
  );
};

export default Stats;
