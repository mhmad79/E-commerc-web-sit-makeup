import React from "react";
import PropTypes from 'prop-types'; 

const Description = ({text}) => {
    return (
        <p>{text}</p>
    )
}

export default Description

Description.propTypes = {
    text: PropTypes.string.isRequired,
   
};