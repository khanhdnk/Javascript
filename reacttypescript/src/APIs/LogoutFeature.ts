import { AuthenticationResponse} from "./Interfaces";
import handlerError from "../Ultils/HandleErrors";

async function LogoutFeature(){
    try{
        const response = await fetch(`http://localhost:3001/api/logout`,{
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
            
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseFromServer: AuthenticationResponse = await response.json();
        if (!responseFromServer.success){
            throw new Error("Can't logout")
        }
        else{
            localStorage.removeItem('refreshToken');
        }
        return "Successful";
        
    }catch(error){
        handlerError(error);
    }
}

export default LogoutFeature;