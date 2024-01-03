import { isApiError, UserInformation, ResponseForGetListEmployees, isAccessTokenExpires } from "./Interfaces";
import RefreshToken from "./RefreshToken";
import checkAccessToken from "./CheckAccessToken";
import Cookies from "js-cookie";
import handlerError from "../Ultils/HandleErrors";
async function getListEmployee(): Promise<UserInformation[]|undefined>{
    try{
        const response = await fetch(`http://localhost:3001/api/employees/`,{
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
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