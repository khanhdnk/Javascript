import { NavigateFunction } from "react-router-dom";
import validateToken from "./validateToken";
async function authenAndAuthor(navigation: NavigateFunction, setAccessGranted: (value: React.SetStateAction<boolean>) => void){
    const result = await validateToken();
    if (result){
        setAccessGranted(true);
    }else{
        navigation('/login')
    }
}
export default authenAndAuthor;