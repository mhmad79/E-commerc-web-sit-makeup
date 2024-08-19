import React from "react";
import { Link } from "react-router-dom";
import Price from "../Price";

const ProductCard = ({id, name, brand, imgUrl, price, }) => {
    return (
        <Link
            className=" flex flex-col align-center
            rounded-md mr-6 mb-4 px-4 py-6 transform hover:scale-105
            hover:shadow-xl transition
            delay-50 duration-300 ease-in-out"
            to={`/product/${id}`}
        >

            <div className=" flex flex-1 flex-col justify-center mb-4">
                <img width='120' 
                src={`https://${imgUrl}`} 
                alt={name} 
                className=" mx-auto mb-6"  />
            </div>
                       
            <div>

                <p className=" text-yellow text-sm lowercase font-font-krona">
                    {name.replace(/^(.{12}[^\s]*).*/, '$1') + '....'}</p>

                    <p className=" mb-4">{brand}</p>

                    <Price price={price || '0'} />

            </div>

                        
        </Link>
    )
}

export default ProductCard