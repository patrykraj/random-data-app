import React, { Component } from "react";
import "../styles/Home.css";
import Users from "../components/Users";
import Pagination from "../components/Pagination";

class Home extends Component {
  state = {
    currentPage: 1,
    usersPerPage: 10,
  };

  paginate = (setPage) => {
    if (
      setPage < 1 ||
      setPage > Math.ceil(this.props.data.length / this.state.usersPerPage)
    )
      return;
    this.setState({
      currentPage: setPage,
    });
  };

  render() {
    const { currentPage, usersPerPage } = this.state;

    const users = this.props.data;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    return (
      <div className="home--container page--container">
        <>
          <h3 className="home--header">Customers accounts</h3>
          <Users users={currentUsers} />
          <Pagination
            data={this.props.data}
            usersPerPage={usersPerPage}
            currentPage={currentPage}
            paginate={this.paginate}
          />
        </>
      </div>
    );
  }
}

export default Home;
