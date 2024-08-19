import React from "react";
import PropTypes from 'prop-types'; 

import Price from '../Price' 
import CartBoutton from "../CartBoutton";
import Image from "./Image";
import Info from "./Info";
import Description from "./Description";
import Title from "./Title";

const Product = ({name = 'Blaaaa', img, type, category, price, description}) => {
    
    return (
    <>
        <Title name={name} 
            type={type} />

        <div className="flex flex-col lg:flex-row items-center justify-center  mb-20 ">
            
            <Image 
                name={name}
                img={img}
                />
        <div >
                
                <Info 
                    category={category}    
                    name={name}
                    type={type}
                    />

        <div className=" flex justify-between items-center my-10 ">
                    
                <Price price={price} isLarge />

                    <CartBoutton />
        </div>
            <Description text={description} />
        </div>

        </div>
    </>
    )
}

export default Product

Product.propTypes = {
    name: PropTypes.string.isRequired ,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired ,
    category: PropTypes.string.isRequired ,
    price: PropTypes.string.isRequired ,
    description: PropTypes.string.isRequired  ,
};


// Product.defaultProps = {
//     name: 'Blaaaa'
// }