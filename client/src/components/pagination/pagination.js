import React from "react";
import './pagination.css';

const Pagination = ({totalRecords, recordsPerPage,setCurrentPage}) => {

    let pages = [];
    for(let i = 1; i<=Math.ceil(totalRecords/recordsPerPage); i++){
        pages.push(i);
    }
    return(
        <div className="pagination">
            {
                pages.map((page, index) =>{
                    return <button key={index} className="paginationButton" onClick={()=>setCurrentPage(page)}>{page}</button>
                })
            }
        </div>
    )
}

export default Pagination;