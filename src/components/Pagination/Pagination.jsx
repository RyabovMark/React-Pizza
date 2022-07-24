import React from 'react';
import './Pagination.scss';
import ReactPaginate from "react-paginate";
import {useDispatch} from "react-redux";
import {setCurrentPage} from "../Redux/Slices/filterSlice";

export default function Pagination() {
  const dispatch = useDispatch();

  const onChangeCurrentPage = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <ReactPaginate
      className='paginate'
      breakLabel='...'
      nextLabel=">"
      onPageChange={event => onChangeCurrentPage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
