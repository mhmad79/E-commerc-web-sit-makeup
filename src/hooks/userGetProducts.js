import { useEffect, useState } from 'react'

import axios from 'axios'

const BESE_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json? '

const useGetProducts = () => {
    const [products, setProducts]  = useState([]);

    const getTopProducts = () => {
        axios
        .get(BESE_URL,{
            params: 
                {product_tags:'ecocert'
                    
                },
            })
            .then( response => setProducts(response.data))
    }

    useEffect(() => {

        getTopProducts();
    }, []);

    return{
        products
    }
    
}

export default useGetProducts