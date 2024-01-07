import handlerError from "../Ultils/HandleErrors";
import { AuthenticationResponse} from "./Interfaces";


async function LoginFeature(userName: string, password: string){
    try{
        
        const response = await fetch(`http://localhost:3001/api/login`,{
            method: 'POST',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                userName,
                password
            })
            
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseFromServer: AuthenticationResponse = await response.json();
        if (!responseFromServer.success){
            return false;
        }
        return true;
        
    }catch(error){
        handlerError(error);
    }




// const token = Cookies.get('jwtToken');
// fetch('/api/protected-resource', {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

}

export default LoginFeature;