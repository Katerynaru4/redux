import React from 'react';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
}) => {
  const isNextPageAvailable = (currentPage + 1) * 3 < totalItems;
  const isPrevPageAvailable = currentPage !== 0;
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        ←
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        →
      </button>
    </div>
  );
};

export default Pagination;
