import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);

    const fetchData=async()=>{
        setLoading(true);
        try{
        const response = await axios.get(url);
        setData(response.data);
    }
    catch(error){
        setError(error);
    }
    finally{
        setLoading(false);
    }
    };
    useEffect (()=>{
        fetchData();
    },[]);
    
    return {
        loading,
        data,
        error,
        refetch:fetchData
    };

};

export default useFetch;