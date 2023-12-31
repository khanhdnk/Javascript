import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';


interface ApiError{
    status: boolean,
    message: string
}

export interface UserInformation{
    id: number,
    name: string
}

export interface ResponseForGetListEmployees{
    success: boolean,
    data: (UserInformation[]|UserInformation|string),
    notice: string
}

export interface AuthenticationResponse{
    success: boolean,
    token: string,
    refreshToken: string
}

export function isAccessTokenExpires():boolean{
    const accessToken = Cookies.get('token');
    if (accessToken){
        const decodedToken:number = jwtDecode(accessToken).exp as number;
        console.log((Date.now() - decodedToken * 1000)/1000);
        if (Date.now() >= decodedToken * 1000) {
            return true;
        }
    }
    return false

}

export function isApiError(error: any): error is ApiError {
    return 'status' in error && 'message' in error;
}

