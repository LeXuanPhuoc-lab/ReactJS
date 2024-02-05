import React from 'react'

const apiRequest = async (API_URL = '', objectOptions = null, errMsg = null) => {
    
    try{
        const response = await fetch(API_URL, objectOptions);
        if(!response.ok) throw new Error("Please reload page");
    }catch(err){
        errMsg = err.message;
    }finally{
        return errMsg;
    }
}

export default apiRequest;