import React from "react";

const Users = (props) => {
  const users = props.users.map((user) => (
    <tr key={user.balance}>
      <th>{`${user.last} ${user.first}`}</th>
      <th>{user.created}</th>
      <th>{user.balance}</th>
    </tr>
  ));

  return (
    <table className="data--list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>{users}</tbody>
    </table>
  );
};

export default Users;
