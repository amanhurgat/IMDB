import { useState } from "react";
import { data } from "react-router-dom";


function Pagination(props){

    const pageNumber=props.pageNumber;
    const nextPageFunction=props.nextPageFunction;
    const prevPageFunction=props.prevPageFunction;
    

    return <div className="flex justify-center items-center text-white bg-gray-400 mt-8 h-[50px]">
        <div onClick={prevPageFunction} className="px-8 cursor-pointer">Prev</div>
        <div>{pageNumber}</div>
        <div onClick={nextPageFunction} className="px-8 cursor-pointer">Next</div>
    </div>

}

export default Pagination;