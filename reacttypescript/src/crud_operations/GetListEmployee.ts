import { isApiError, UserInformation, ResponseForGetListEmployees } from "./Interfaces";
import Cookies from "js-cookie";
async function getListEmployee(): Promise<UserInformation[]|undefined>{
    try{
        const response = await fetch(`http://localhost:3001/api/employees/`,{
            method: 'GET',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json',
                'authorization': `Bearer ${Cookies.get('token')}` as string
                // 'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3MDM4Mjc2NTV9.LcGlB0lsayD8jTxFisk261iKU9HNRWK4yZq0p8czD2w` as string
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
        if (isApiError(error)){
            console.error('Error fetching data:', error.message);
            throw error;
        }
    }
}
export default getListEmployee;