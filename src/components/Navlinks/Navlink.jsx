import React from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/search',
        name: 'Search'
    },
    {
        path: '/about',
        name: 'About'
    }
];

const Navlinks = () => {
    return (
        <>
            {LINKS.map((link, index) => (
                <NavLink 
                    key={index}
                    to={link.path} 
                    className={({ isActive }) => 
                        isActive ? "text-yellow text-sm mr-8 lowercase" : 
                        "text-dark text-sm mr-8 lowercase"
                    }
                >
                    {link.name}
                </NavLink>
            ))}
        </>
    );
};

export default Navlinks;