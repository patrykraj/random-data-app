import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../styles/App.css";
import Page from "./Page";
import Aside from "./Aside";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  state = {
    menuIsOpen: false,
  };

  handleMenu = () => {
    this.setState((state) => ({
      menuIsOpen: !state.menuIsOpen,
    }));
  };

  hideMenu = () => {
    this.setState({
      menuIsOpen: false,
    });
  };

  render() {
    const { menuIsOpen } = this.state;

    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <header className="header">{<Header />}</header>
          <aside className={menuIsOpen ? "aside menu__isOpen" : "aside"}>
            {<Aside handleMenu={this.handleMenu} />}
          </aside>
          <main className="main">{<Page />}</main>
          <footer className="footer">{<Footer />}</footer>
          <aside onClick={this.hideMenu} className="aside--overlay"></aside>
        </Router>
      </div>
    );
  }
}

export default App;
