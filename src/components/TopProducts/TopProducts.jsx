import React, { useEffect } from "react";
import BouttonLink from "../BouttonLink";
import SectionTitle from "../SectionTitle";
import SecondaryBanner from "../SecondaryBanner";
import useGetProducts from "../../hooks/userGetProducts";
import ProductCard from "../ProductCard";



const TopProducts =() => {

    const { products, getTopProducts  } = useGetProducts()

    useEffect(() => {
        getTopProducts();
    }, [getTopProducts]);
    return (
        <div className=" container mx-auto">
            <div className=" flex items-center justify-between mb-6">
                <SectionTitle text="Top products" /> 
                <BouttonLink path="/about" text="see more" isMain />
            </div>
                {/* products */}
                <div className=' flex flex-wrap justify-center'>
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