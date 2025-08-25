import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export const Pagination = ({pageNumber, changeCurrentPage }) => {
 
  
  return (
    <ReactPaginate
      breakLabel="..."
      className={styles.root}
      nextLabel=">"
      onPageChange={(e) => changeCurrentPage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={pageNumber}
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  );
};
