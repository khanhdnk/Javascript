import { isApiError } from "../APIs/Interfaces";
function handlerError(error:any){
    if (isApiError(error)){
        console.error('Error fetching data:', error.message);
        throw error;
    }

}

export default handlerError;