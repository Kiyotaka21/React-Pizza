import styles from './Pagination.module.scss'
import ReactPaginate from "react-paginate";

export function Pagination({ currentPage, onChangePage}) {
    return (
        <ReactPaginate
        className={styles['paginate']}
        breakLabel="..."
        nextLabel=" >"
        previousLabel="< "
        onPageChange={event => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    )
}