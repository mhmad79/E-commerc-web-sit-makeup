import { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products';

const useGetProducts = () => {

    const { id } = useParams();
    const [singleProduct, setSingleProduct ] = useState(null)


    const getSingleProduct = useCallback(() => {
        if (!id) return; 
        axios.get(`${BASE_URL}/${id}.json`).then(response => {
            setSingleProduct(response.data)
        })
             
    },[id]);
    


    useEffect(() => {
            getSingleProduct();
    },[id, getSingleProduct]);
    


    return{
        singleProduct,
        getSingleProduct,
    }
    
}

export default useGetProducts