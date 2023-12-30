import { useState } from "react";
import { AuthenticationResponse, isApiError } from "./Interfaces";
import Cookies from 'js-cookie';


async function LoginFeature(userName: string, password: string){
    try{
        const response = await fetch(`http://localhost:3001/api/login`,{
            method: 'POST',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName,
                password
            })
            
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseFromServer: AuthenticationResponse = await response.json();
        if (!responseFromServer.success){
            throw new Error("Can't retrieve data")
        }
        else{
            const token= responseFromServer.token;
            const refreshToken = responseFromServer.refreshToken 
            localStorage.setItem('refreshToken', refreshToken);
            // Cookies.set('jwtToken', token, {
            //     expires: 7, // Expires in 7 days
            //     httpOnly: true, // Prevents client-side JavaScript access
            //     secure: process.env.NODE_ENV === 'production', // Only for HTTPS in production
            // });
            console.log(token);
            Cookies.set('token', token, { expires: 7});

        }
        return "Successful";
        
    }catch(error){
        if (isApiError(error)){
            console.error('Error while processing:', error.message);
            throw error;

        }
    }




// const token = Cookies.get('jwtToken');
// fetch('/api/protected-resource', {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

}

export default LoginFeature;