import React from "react";
import Dropdown from "../Dropdown/Dropdown";


import { BRANDS } from "../../contants/brands";
import { SORTING } from "../../contants/sorting";


const TopBarr = ({ setFilter }) => {
    const handleOnchange = e => {
        const { name, value } = e.target;
        setFilter(name, value);
    };
    return (
        <div className=" flex space-x-4">
            <Dropdown type='brand' values={['all', ...BRANDS]} onChange={handleOnchange} />
            <Dropdown type='sort' values={SORTING} onChange={handleOnchange}  />
        </div>
    )
}

export default TopBarr
