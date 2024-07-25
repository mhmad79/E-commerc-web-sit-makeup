import React from "react";
import { Link } from "react-router-dom";
import ProductPrice from "../ProductPrice";

const ProductCard = ({id, name, brand, imgUrl, price, }) => {
    return (
        <Link 
            className=" flex flex-col align-center rounded-md mr-6 mb-4 px-4 py-6 transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out "
                to={`/product/${id}`}>

                        <img width='120' src={`https://${imgUrl}`} alt={name} className=" mx-auto mb-6"  />
                        <p className=" text-yellow text-sm lowercase font-font-krona">{name}</p>
                        <p className=" mb-4">{brand}</p>

                        <ProductPrice price={price} />

                        
                </Link>
    )
}

export default ProductCard