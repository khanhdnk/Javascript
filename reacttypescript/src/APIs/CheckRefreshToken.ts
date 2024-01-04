import handlerError from "../Ultils/HandleErrors";
import { OperationResult } from "./Interfaces";


async function checkRefreshToken(){
    try{
        const response = await fetch(`http://localhost:3001/api/checkRefreshToken`,{
            method: 'POST',
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

export default checkRefreshToken;