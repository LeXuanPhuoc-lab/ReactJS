import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        let isMounted = true;
        /// May cancel a request whenever the component is unmounted
        const source = axios.CancelToken.source();
        
        const fetchData = async (url) => {
            setIsLoading(true);

            try{
                const response = await axios.get(url, {
                    cancelToken: source.token // cancel token send with request 
                });

                if(isMounted){
                    setData(response.data);
                    setFetchError(null);
                }
            }catch(err){
                if(isMounted){
                    setFetchError(err.message);
                    setData([]);
                }
            }finally{
                isMounted && setTimeout(() => setIsLoading(false), 2000);
            }
        };

        fetchData(dataUrl);

        const cleanUp = () => {
            console.log(`clean up function`);
            isMounted = false;
            source.cancel();
        }
        
        return cleanUp;
    }, [dataUrl]);

    return { data, fetchError, isLoading };
}

export default useAxiosFetch;