import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export const Pagination = ({ setPageNumber }) => {
 
  
  return (
    <ReactPaginate
      breakLabel="..."
      className={styles.root}
      nextLabel=">"
      onPageChange={(e) => setPageNumber(e.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={3}
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  );
};
