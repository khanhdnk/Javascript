import { useState } from "react";
import { AuthenticationResponse, isApiError , ResponseForGetListEmployees} from "./Interfaces";
import Cookies from 'js-cookie';


async function RefreshToken(){
    try{
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await fetch(`http://localhost:3001/api/token`,{
            method: 'POST',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json',
                'authorization': `Bearer ${refreshToken? refreshToken: null}`
            }
            
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseFromServer: ResponseForGetListEmployees = await response.json();
        if (!responseFromServer.success){
            throw new Error("Can't retrieve data")
        }
        else{
            const token = responseFromServer.data as string;
            // Cookies.set('jwtToken', token, {
            //     expires: 7, // Expires in 7 days
            //     httpOnly: true, // Prevents client-side JavaScript access
            //     secure: process.env.NODE_ENV === 'production', // Only for HTTPS in production
            // });
            Cookies.set('token', token, { expires: 7});
            return token;
        }
        
    }catch(error){
        if (isApiError(error)){
            console.error('Error while processing:', error.message);
            throw error;

        }
    }
}

export default RefreshToken;