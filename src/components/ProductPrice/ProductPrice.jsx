import React from "react";

const ProductPrice = ({price, isLarge}) => {
    return (
             <div className=" relative">
                        <div className=" w-10 h-10 absolute rounded-full bg-light-grey top-0  -z-10"></div>
                            <p className={`font-font-krona text-${isLarge ? 'lg' : 'md'} pt-2 ml-4`}>
                                {price}  &euro;
                            </p>
                           
                        </div>
    )
}

export default ProductPrice