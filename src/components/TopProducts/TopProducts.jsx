import React from "react";
import BouttonLink from "../BouttonLink";
import SectionTitle from "../SectionTitle";
import SecondaryBanner from "../SecondaryBanner";
import useGetTopProducts from "../../hooks/useGetTopProducts";
import ProductCard from "../ProductCard";



const TopProducts =() => {

    const  products  = useGetTopProducts()

    return (
        <div className=" container mx-auto md:mt-20">
            <div className=" flex items-center justify-between mb-6">
                <SectionTitle text="Top products" /> 
                <BouttonLink path="/about" text="see more" isMain className=' hidden md:block' />
            </div>
                {/* products */}
                <div className=' flex flex-wrap justify-center mb-10'>
                    {products.map(product => (

                <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        brand={product.brand}
                        imgUrl={product.api_featured_image}
                        price={product.price}
                />
                    ))}
                </div>
                <SecondaryBanner />
        </div >

    )
}

export default TopProducts