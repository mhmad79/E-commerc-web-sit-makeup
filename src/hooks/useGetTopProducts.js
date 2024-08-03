import { useEffect, useState } from 'react'
import axios from 'axios';
const BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products';
const PRODUCT_TAGS = [
'Canadian',
'CertClean',
'Chemical Free',
'Dairy Free',
'EWG Verified',
'EcoCert',
'Fair Trade',
'Gluten Free',
'Hypoallergenic',
'Natural',
'No Talc',
'Non-GMO',
'Organic',
'Peanut Free Product',
'Sugar Free',
'USDA Organic',
'Vegan',
'alcohol free',
'cruelty free',
'oil free',
'purpicks',
'silicone free',
'water free'

];
const getRandomProductTag = () => {
    const randomNumber = Math.floor(Math.random() * 
    PRODUCT_TAGS.length);
    return PRODUCT_TAGS[randomNumber];
};
const useGetTopProducts = () => {

    const [products, setProducts]  = useState([]);


    const getTopProducts = () => {
        axios
        .get(`${BASE_URL}.json`,{
            params: 
                {product_tags: getRandomProductTag()
                    
                },
            })
            .then( response =>{ const topFourProducts = response.data.slice(0, 8)
                setProducts(topFourProducts);})
    };



    useEffect(() => {
        getTopProducts();
    }, []);
    


    return products;
    
}

export default useGetTopProducts