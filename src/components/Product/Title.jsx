import React from "react";
import PropTypes from 'prop-types'; 

const Title = ({name, type}) => {
    return (
        <div className=" mb-10">
        <h5 className=" font-font-krona text-sm"><p>{name}</p></h5>
        <p className=" text-sm font-font-krona text-dark-grey">{type}</p>

    </div>
    )
}

export default Title

Title.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired ,
};