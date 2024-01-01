import { useState } from "react";
import { AuthenticationResponse, isApiError, OperationResult } from "./Interfaces";
import Cookies from 'js-cookie';
import RefreshToken from "./RefreshToken";


async function checkRefreshToken(){
    try{
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await fetch(`http://localhost:3001/api/checkRefreshToken`,{
            method: 'POST',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json',
                'authorization': `Bearer ${refreshToken && refreshToken}`
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

export default checkRefreshToken;