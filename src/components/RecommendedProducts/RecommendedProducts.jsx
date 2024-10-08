import React from "react";
import useGetRecommendedProducts from '../../hooks/useGetRecommendedProduct'
import ProductCard from "../ProductCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import Loaderr from "../Loaderr";

const RecommendedProducts = ({product}) => {
    const products = useGetRecommendedProducts(product)

    if (products.length === 0) return <div className=" h-96 flex justify-center items-center">  
                        <Loaderr />  
                </div> ;
    return(
        <>
        <SectionTitle text='For you' />
            <div className="flex flex-wrap justify-center">
                {products.map((item) => (
                         <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        brand={item.brand}
                        imgUrl={item.api_featured_image}
                        price={item.price}
                />
                        
                    
                ))}
            </div>
            </>
    )
}

export default RecommendedProducts