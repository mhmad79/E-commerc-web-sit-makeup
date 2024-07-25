import React from "react";

const ProductTitle = ({name, type}) => {
    return (
        <div className=" mb-10">
        <h5 className=" font-font-krona text-sm"><p>{name}</p></h5>
        <p className=" text-sm font-font-krona text-dark-grey">{type}</p>

    </div>
    )
}

export default ProductTitle