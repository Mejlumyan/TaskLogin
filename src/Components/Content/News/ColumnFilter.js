 import React from "react";

 const ColumnFilter = ({column}) => {
    const {filterValue, setFilter} =column
    return(
        <span>
            Search:{''}
            <input value={filterValue || ''} 
            onChange={(e)=> setFilter(e.target.value)}></input>
        </span>
    )
 }


 export default ColumnFilter;