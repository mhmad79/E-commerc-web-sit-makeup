import React from "react";
import Sidebar from "../components/Sidebar";
import HeaderBanner from "../components/HeaderBanner";
import TopBarr from "../components/TopBarr";
import useSearch from "../hooks/useSearch";
import Products from "../components/Products/Products";

// import Navbar from "../components/Navbar";


const Search = () => {
    const { products, setFilter } = useSearch();
    console.log(products)
    return (
        <>
            <HeaderBanner />
            <div className="search">
                <div className="sidebar">
                    <Sidebar setFilter={setFilter} />
                </div>
                <div className="topbar"> 
                    <TopBarr setFilter={setFilter} /> 
                </div>
                <div className="results">
                    <Products products={products} />
                </div>
            </div>
    </>
    )
}

export default Search