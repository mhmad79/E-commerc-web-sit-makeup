import React from "react";
import PropTypes from 'prop-types'; 

import ProductPrice from '../../components/ProductPrice' 
import CartBoutton from "../CartBoutton";

const ProductPreview = ({name, img, type, category, price, description}) => {

    const imgUrl = `https://${img}`;
    const formatType = type.replace(/_/g, ' ');
    const formatdescription = description.replace(/<\/[^>]+(>|$)/g, "");
    
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center  mb-20 ">
            <div className="flex items-center justify-center w-3/4 sm:w-2/4 md:w-1/4 lg:w-full  lg:mr-10">
                <img className="" src={imgUrl} 
                alt={name} />
            </div>
            

    <div >
        <p className=" text-sm font-font-krona text-yellow">{formatType}</p>

        <h1 className=" font-font-krona text-base">{name}</h1>
        
        <p>{category}</p>

        <div className=" flex justify-between items-center my-10 ">
                    
                <ProductPrice price={price} isLarge />

                    <CartBoutton />
    </div>
            <p>{formatdescription}</p>
        </div>

        </div>
    )
}

export default ProductPreview

ProductPreview.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired ,
    type: PropTypes.string.isRequired ,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
ProductPreview.defaultProps = {
    name: 'Blaaaa'
}