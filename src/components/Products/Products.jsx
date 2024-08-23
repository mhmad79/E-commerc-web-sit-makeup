import React from "react";
import { useSearchStste } from "../../state/search-context";

import Loaderr from "../Loaderr";
import ProductCard from "../ProductCard";

const Products = () => {
    const [{ products }] = useSearchStste();
    return ( 

        <div className=' flex flex-wrap justify-center mb-10'>
        {products.length === 0 ? (
            <Loaderr classes=' my-4' />
            
            ) : (

                <>
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
                </>   
            )}    
        </div>
    )
}
export default Products