import React from "react";
import "../styles/Pagination.css";

const Pagination = (props) => {
  const paginationLength = Math.ceil(props.data.length / props.usersPerPage);
  const buttons = [];

  for (let i = 1; i <= paginationLength; i++) {
    if (i > props.currentPage + 2 || i < props.currentPage - 2) {
      continue;
    } else {
      buttons.push(
        <button
          className={
            props.currentPage === i
              ? "pagination__btn active"
              : "pagination__btn"
          }
          key={i}
          onClick={() => props.paginate(i)}
        >
          {i}
        </button>
      );
    }
  }

  return (
    <nav>
      <div className="pagination">
        <button
          className={
            props.currentPage === 1
              ? "pagination__btn disabled"
              : "pagination__btn"
          }
          onClick={() => props.paginate(1)}
        >
          {"<<"}
        </button>
        <button
          className={
            props.currentPage === 1
              ? "pagination__btn disabled"
              : "pagination__btn"
          }
          onClick={() => props.paginate(props.currentPage - 1)}
        >
          {"<"}
        </button>
        {buttons}
        <button
          className={
            props.currentPage === paginationLength
              ? "pagination__btn disabled"
              : "pagination__btn"
          }
          onClick={() => props.paginate(props.currentPage + 1)}
        >
          {">"}
        </button>
        <button
          className={
            props.currentPage === paginationLength
              ? "pagination__btn disabled"
              : "pagination__btn"
          }
          onClick={() => props.paginate(paginationLength)}
        >
          {">>"}
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
