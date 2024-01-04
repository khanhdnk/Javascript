import handlerError from "../Ultils/HandleErrors";
import { ResponseForGetListEmployees } from "./Interfaces";

async function deleteEmployee (id:number): Promise<string|undefined>
{
    try{
        const response = await fetch(`http://localhost:3001/api/employees/delete/${id}`,{
            method: 'DELETE',
            headers: {
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
        return "Successful";
    }catch(error){
        handlerError(error);
    }
}

export default deleteEmployee;