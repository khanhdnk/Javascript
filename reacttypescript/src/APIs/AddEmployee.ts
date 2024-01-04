import handlerError from "../Ultils/HandleErrors";
import { ResponseForGetListEmployees } from "./Interfaces";
async function addEmployee(id:number,name: string){
    try{
        const response = await fetch(`http://localhost:3001/api/employees/add/`,{
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                name
            })
            
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseFromServer: ResponseForGetListEmployees = await response.json();
        if (!responseFromServer.success){
            throw new Error("Can't retrieve data")
        }
        return "Successful";
        
    }catch(error){
        handlerError(error);
    }
}

export default addEmployee;