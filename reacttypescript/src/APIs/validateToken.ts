import { OperationResult } from "./Interfaces";
import handlerError from "../Ultils/HandleErrors";


async function validateToken(){
    try{
        const response = await fetch(`http://localhost:3001/api/checkToken`,{
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
            
        });

        if (!response.ok) {
            return false;
        }
        const responseFromServer: OperationResult = await response.json();
        if (responseFromServer.success){
            return true;
        }
        else{
            return false;
        }
        
    }catch(error){
        handlerError(error);
    }

}

export default validateToken;