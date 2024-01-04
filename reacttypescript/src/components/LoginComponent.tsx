import { useState, useEffect } from "react";
import LoginFeature from "../APIs/LoginFeature";
import {useNavigate} from 'react-router-dom';
import checkToken from "../APIs/validateToken";
function LoginComponent(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const navigation = useNavigate();
    
    useEffect(() => {
        const resultChecking =async () => {
            const result = await checkToken();
            if (result){
                navigation('/')
            }else{
            }
          };
          resultChecking();
    },[login, navigation]);
    
    async function handleSubmitLogin() {
        const loginResult = await LoginFeature(userName, password);
        if (loginResult){
            setLogin(true);

        }
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
    }
    
    if (login){
        return(<></>);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="api_section">
                    <h1>Login</h1>
                    <label htmlFor="user_name">Username</label>
                    <input value={userName} type="text" id="user_name" name="user_name" onChange={e=> setUserName(e.target.value)}/><br/>

                    <label htmlFor="password">Password</label>
                    <input value={password} type="text" id="password" name="password" onChange={e=> setPassword(e.target.value)}/><br/>
                    <input className="input_button" type="submit" value="Submit" onClick={handleSubmitLogin}/>

                </div>

            </form>
        </>
    );
}

export default LoginComponent;