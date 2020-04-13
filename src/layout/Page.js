import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Stats from "../pages/Stats";
import Data from "../pages/Data";
import About from "../pages/About";
import Error from "../pages/Error";

class Page extends Component {
  state = {
    data: [],
    loadingData: true,
    chartData: [],
  };

  componentDidMount() {
    fetch(
      "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
    )
      .then((Response) => {
        if (Response.ok) return Response;
        throw Error(Response.status);
      })
      .then((Response) => Response.json())
      .then((data) => {
        this.setState(
          {
            data,
          },
          () => {
            this.getData();
          }
        );
      });
  }

  getData() {
    let labels = [];
    let data = [];

    this.state.data.forEach((user) => {
      const label = user.created.slice(-4);
      if (!labels.includes(label)) labels.push(label);
    });
    labels = labels.sort();

    labels.forEach((year) => {
      let sum = 0;
      this.state.data.forEach((user) => {
        let balance = user.balance;
        balance = balance.replace("$", "");
        balance = balance.replace(",", "");
        balance = parseFloat(balance);
        if (user.created.slice(-4) === year) sum += balance;
      });
      data.push(sum.toFixed(2));
    });

    this.setState({
      chartData: {
        labels,
        datasets: [
          {
            label: "Sum",
            data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
          },
        ],
      },
      loadingData: false,
    });
  }

  render() {
    const { data, loadingData, chartData } = this.state;

    if (loadingData)
      return (
        <div className="loader--container page--container">
          <p>Loading data...</p>
        </div>
      );

    return (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Home {...props} data={data} loadingData={loadingData} />
          )}
        />
        <Route
          path="/stats"
          render={(props) => <Stats chartData={chartData} />}
        />
        <Route path="/data" render={(props) => <Data />} />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default Page;
