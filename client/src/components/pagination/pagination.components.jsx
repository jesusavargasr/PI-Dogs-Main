import style from './pagination.module.css'
import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
  const totalPage = Math.ceil(totalItems / itemsPerPage);

  const nextHandler = () => {
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevHandler = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={style.div}>
      <button onClick={prevHandler}>back</button>
      <button onClick={nextHandler}>next</button>
    </div>
  );
};

export default Pagination;