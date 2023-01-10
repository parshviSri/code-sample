import React, { useState } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [currentPageNum, setCurrentPageNum] = useState(currentPage);

  const handlePageChange = (pageNum) => {
    setCurrentPageNum(pageNum);
    onPageChange(pageNum);
  }

  const renderPageButton = (pageNum) => {
    return (
      <button
        key={pageNum}
        className={`pagination-button ${currentPageNum === pageNum ? 'active' : ''}`}
        onClick={() => handlePageChange(pageNum)}
      >
        {pageNum}
      </button>
    );
  }

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(renderPageButton(i));
    }
    return pages;
  }

  return (
    <div className="pagination">
      {renderPagination()}
    </div>
  );
};

export default Pagination;

