import React from "react";

import './Navbar.css';

import Brandlink from "../Brandlink";

import Navlinks from "../Navlinks";
import Harticon from "../Icons/Harticon";
import Carticon from "../Icons/Carticon";

// import { NavLink } from "react-router-dom";




function Navbar () {

    return (
        <nav className=" container mx-auto font-font-krona flex justify-between p-3">
            {/* BROND */}
                <Brandlink/>

                <div className=" items-end flex lowercase "> 

                <Navlinks />
            <div className="flex">
                <Harticon />

               <Carticon />
            </div>

           </div>
        </nav>
    )
}

export default Navbar