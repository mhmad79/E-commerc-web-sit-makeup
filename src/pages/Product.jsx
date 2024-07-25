import React from "react";
import useGetProducts from "../hooks/userGetProducts";

import ProductPrice from '../components/ProductPrice' 
import ProductTitle from "../components/ProductTitle";
const Product = () => {

    const { singleProduct } =  useGetProducts();


    if (!singleProduct) return <p>loadng....</p> 

    return (
        <div className=" mt-20 container mx-auto mb-20  h-screen">

            <ProductTitle name={singleProduct.name} type={singleProduct.product_type} />

            <div className="flex mb-10 ">
                <div className="flex items-center justify-center w-screen ">
                    <img className="" src={`https://${singleProduct.api_featured_image}`} alt={singleProduct.name}  />
                </div>
                

            <div className="">
                <p className=" text-sm font-font-krona text-yellow">{singleProduct.product_type}</p>
                <h1 className=" font-font-krona text-base">{singleProduct.name}</h1>
                

                <p>{singleProduct.category}</p>

                <div className=" flex justify-between items-center my-10 ">
                            
                            <ProductPrice price={singleProduct.price} isLarge />
                        {/* <div>counter</div> */}
                        <button className=' rounded-full py-3 px-6 font-bold font-font-krona text-xs inline-block bg-yellow'>
                            add to basket
                            </button>

            </div>

                    <p>{singleProduct.description.replace(/<\/[^>]+(>|$)/g, "")}</p>
                </div>

                </div>
{/*            
                <div className=' flex flex-wrap justify-center'>
                    {products.map(product => (

                <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        brand={product.brand}
                        imgUrl={product.api_featured_image}
                        price={product.price}
                />
                    ))}
                </div> */}
        </div>
    )
 }

export default Product