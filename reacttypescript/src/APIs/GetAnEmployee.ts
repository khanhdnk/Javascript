import handlerError from "../Ultils/HandleErrors";
import { UserInformation, ResponseForGetListEmployees } from "./Interfaces";
async function getAnEmployee(id: number):Promise<UserInformation|undefined>{
    try{
        const response = await fetch(`http://localhost:3001/api/employees/${id}`,{
            method: 'GET',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json'
            }
            
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseFromServer:ResponseForGetListEmployees = await response.json();
        if (!responseFromServer.success){
            throw new Error("Can't retrieve data")
        }
        return responseFromServer.data as UserInformation;
        

    }catch(error){
        handlerError(error);
    }
}

export default getAnEmployee;