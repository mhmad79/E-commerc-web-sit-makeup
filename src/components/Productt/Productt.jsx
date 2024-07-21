import React from "react";
import { Link } from "react-router-dom";

const Productt = ({id, name, brand, imgUrl, price, currency }) => {
    return (
        <Link className=" flex flex-col align-center rounded-md mr-6 mb-4 px-4 py-6 transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out " to={`/about/${id}`}>
                        <img width='120' src={`https://${imgUrl}`} alt={name} className=" mx-auto mb-6"  />
                        <p className=" text-yellow text-sm lowercase font-font-krona">{name}</p>
                        <p className=" mb-4">{brand}</p>
                        <div className=" relative">
                        <div className=" w-10 h-10 absolute rounded-full bg-light-grey top-0  -z-10"></div>
                            <p className=" font-font-krona text-md pt-2 ml-4">
                                {price} {currency}
                            </p>
                           
                        </div>
                        
                </Link>
    )
}

export default Productt