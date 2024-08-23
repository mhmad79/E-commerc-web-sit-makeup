import React from "react";

import useSearch from "../../hooks/useSearch";

import Sidebar from "../Sidebar";
import TopBarr from "../TopBarr/TopBarr";
import Products from "../Products/Products";

const Search = () => {
    const { setFilter } = useSearch();

    return (
        <div className="search">
        <div className="sidebar">
            <Sidebar setFilter={setFilter} />
        </div>
        <div className="topbar"> 
            <TopBarr setFilter={setFilter} /> 
        </div>
        <div className="results">
            <Products />
        </div>
    </div>
    )
}

export default Search