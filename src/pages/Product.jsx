import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";

import RecommendedProducts from "../components/RecommendedProducts";
import Benefits from "../components/Benefits/Benefits";
import ProductPreview from "../components/Product";
import Loaderr from "../components/Loaderr";

const Product = () => {

    const location = useLocation();
    const { singleProduct, isLoading } =  useGetProducts();

    useLayoutEffect (() => {
        window.scrollTo(0, 0);
    }, [location.pathname])

    if (!singleProduct) return <div className=" h-96 flex justify-center items-center">  <Loaderr />  </div> 

    return (
        
        <div className=" mt-20 container mx-auto ">

               {isLoading ? (
                    <div className=" h-96 flex justify-center items-center">  
               <Loaderr />  
               </div> 

               ):(
                <>
             
            <ProductPreview
                name={singleProduct.name}
                img={singleProduct.api_featured_image} 
                type={singleProduct.product_type} 
                category={singleProduct.category} 
                price={singleProduct.price}
                description={singleProduct.description}   
                        
            />
                </>
        )}
                <Benefits />
                <RecommendedProducts product={singleProduct} /> 

        </div>
    )
 }

export default Product