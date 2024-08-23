import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import SearchProvider from "../state/search-context";
import Search from "../components/Search";

// import Navbar from "../components/Navbar";


const SearchPage = () => {

   
    return (
        <>
            <HeaderBanner />
            <SearchProvider>
               <Search />
            </SearchProvider>
    </>
    )
}

export default SearchPage