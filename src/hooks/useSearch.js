import { useEffect } from 'react'
import axios from 'axios';
import { useSearchStste } from '../state/search-context';
import { setProducts } from '../state/actionCreators';

const BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products';

const useSearch = () => {
    const [state, dispatch] = useSearchStste();



    const getProducts = params => {
           dispatch(setProducts([]))
        

        // setProducts([])

        axios
        .get(`${BASE_URL}.json`, {
                params, 
            })
            .then(({ data }) => {
               dispatch(setProducts(data))
                // setProducts(data);
            });
    };
    
    const setFilter = (type, value) => {
        const params = {
            [type]: value,
        };
        getProducts(params)
    };

    useEffect(() => {
        getProducts();
    }, []);
    
    
    return { setFilter };
    };



export default useSearch