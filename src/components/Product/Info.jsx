import React from "react";
import PropTypes from 'prop-types'; 

const Info = ({category, name, type}) => {

    return (
        <>
            <p className=" text-sm font-font-krona text-yellow">{type}</p>

            <h1 className=" font-font-krona text-base">{name}</h1>

            <p>{category}</p>
        </>
    )
}

export default Info

Info.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired ,
    category: PropTypes.string.isRequired,
};