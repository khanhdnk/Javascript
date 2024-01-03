import { useState } from "react";
import { AuthenticationResponse, isApiError, OperationResult } from "./Interfaces";
import Cookies from 'js-cookie';


async function checkAccessToken(){
    try{
        const response = await fetch(`http://localhost:3001/api/checkToken`,{
            method: 'POST',
            credentials: 'include',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json',
                'authorization': `Bearer ${Cookies.get('token')}`
            }
            
        });

        if (!response.ok) {
            return false;
        }
        const responseFromServer: OperationResult = await response.json();
        if (responseFromServer.success){
            return true;

        }
        else{
            return false;
        }
        
    }catch(error){
        if (isApiError(error)){
            console.error('Error while processing:', error.message);
            throw error;

        }
    }

}

export default checkAccessToken;