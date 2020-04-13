import React, { Component } from "react";
import { Bar, Pie } from "react-chartjs-2";

class Chart extends Component {
  state = {
    chartData: this.props.chartData,
  };

  static defaultProps = {
    displayTitle: false,
    displayLegend: false,
    legendPosition: "right",
    location: "Year",
  };

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Annual Savings $",
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Annual Savings $",
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
