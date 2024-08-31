import React from "react";

import useSearch from "../../hooks/useSearch";

import Loaderr from "../Loaderr";

import Sidebar from "../Sidebar";
// import TopBarr from "../TopBarr/TopBarr";
import Products from "../Products/Products";
const Search = () => {
   const { isLoading } = useSearch()

    return (
        <div className="search">
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="results flex flex-wrap justify-center">
            {isLoading ? <Loaderr classes=' my-4 ' /> :
            <Products />}
        </div>
    </div>
    )
}

export default Search