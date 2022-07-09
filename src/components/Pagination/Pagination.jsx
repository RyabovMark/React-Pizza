import React from 'react';
import './Pagination.scss';
import ReactPaginate from "react-paginate";

export default function Pagination({onChangePage}) {

  return (
    <ReactPaginate
      className='paginate'
      breakLabel='...'
      nextLabel=">"
      onPageChange={event => onChangePage(event.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={4}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
