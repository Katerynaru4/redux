import React from 'react';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const isNextPageAvailable = currentPage * itemsPerPage < totalItems;
  const isPrevPageAvailable = currentPage !== 1;
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable ? '←' : null}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable ? '→' : null}
      </button>
    </div>
  );
};

export default Pagination;
