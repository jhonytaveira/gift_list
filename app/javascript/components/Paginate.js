import React from 'react'
import ReactPaginate from 'react-paginate'

const Paginate = ({
  products,
  handlePageClick,
  pageNumber
}) => {
  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={products.pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
      forcePage={pageNumber}
    />
  )
}

export default Paginate
