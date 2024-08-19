import { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products';


const formatProduct = data => ({
    ...data,
    categoty: data.categoty?.replace(/_/g, ' '),
    product_type: data.product_type?.replace(/_/g, ' '),
    description: data.description.replace(/<\/[^>]+(>|$)/g, ""),
    category: data.category?.replace(/_/g, ' '),
    api_featured_imge: `https://${data.api_featured_imge}`
});
    


const useGetProducts = () => {

    const { id } = useParams();
    const [singleProduct, setSingleProduct ] = useState(null)
    const [isLoading, setISloading] = useState(false)

    const getSingleProduct = useCallback(() => {
        setISloading(true)
        if (!id) return; 
        axios.get(`${BASE_URL}/${id}.json`).then(response => {
            const data =  formatProduct(response.data)
            setSingleProduct(data)
        })
             
    },[id]);
    


    useEffect(() => {
            getSingleProduct();
    }, [id, getSingleProduct]);
    
    useEffect(() => {
            setISloading(false);
    },[singleProduct]);
    


    return{
        isLoading,
        singleProduct,
        // getSingleProduct,
    }
    
}

export default useGetProducts