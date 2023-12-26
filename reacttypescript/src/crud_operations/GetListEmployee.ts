import { isApiError, UserInformation, ResponseForGetListEmployees } from "./Interfaces";
async function getListEmployee(): Promise<UserInformation[]|undefined>{
    try{
        const response = await fetch(`http://localhost:3001/api/employees/`,{
            method: 'GET',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json'
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