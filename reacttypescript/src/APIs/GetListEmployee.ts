import { isApiError, UserInformation, ResponseForGetListEmployees, isAccessTokenExpires } from "./Interfaces";
import RefreshToken from "./RefreshToken";
import checkAccessToken from "./CheckAccessToken";
import Cookies from "js-cookie";
import handlerError from "../Ultils/HandleErrors";
async function getListEmployee(): Promise<UserInformation[]|undefined>{
    try{
        // let token : string = '';
        // let isTokenExpires = (await checkAccessToken());
        // if (!isTokenExpires){
        //     token = await RefreshToken() as string;
        // }
        // else{
            let token = Cookies.get('token') as string;
        // }
        const response = await fetch(`http://localhost:3001/api/employees/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token && token}` as string,
                'credentials': 'include'
                // 'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3MDM4NTA5OTEsImV4cCI6MTcwMzg1MTA5MX0.TCND02KLk78B_pMOej6HnySqNL7S7UoE6ZU-z_QoCB0` as string
            }
        });
        const responseEmployeeList:ResponseForGetListEmployees = await response.json();
        if (!responseEmployeeList.success){
            throw new Error("Can't retrieve data")
        }
        const employeeList: UserInformation[]= responseEmployeeList.data as UserInformation[]; 
        return employeeList
    }
    catch (error) {
        handlerError(error);
    }
}
export default getListEmployee;