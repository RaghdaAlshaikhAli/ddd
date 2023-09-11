import React from 'react'
import './style.scss'
import ReactPaginate from 'react-paginate'


const Pagination = () => {
    return (
        <div className='pagnition'>
            <ReactPaginate
                previousLabel='<<'
                nextLabel='>>'
                breakLabel='...'
                pageCount={15}
                marginPagesDisplayed={'3'}
                pageRangeDisplayed={'3'}
                containerClassName='pagination justify-content-center'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                activeClassName='active'
            />
        </div>
    )
}

export default Pagination
