import { useState, useEffect } from "react";
import LoginFeature from "../APIs/LoginFeature";
import Cookies from "js-cookie";
import {useNavigate} from 'react-router-dom';
import checkRefreshAndAccess from "../APIs/CheckRefreshAndAccess";
function LoginComponent(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [accessGranted, setAccessGranted] = useState(false);
    const [login, setLogin] = useState(false);
    const navigation = useNavigate();
    
    useEffect(() => {
        const control = async () => {
        const checkResult = await checkRefreshAndAccess();
        if (checkResult) {
            navigation('/');
        }
        };

        control();
    }, [login]);
    
    async function handleSubmitLogin() {
        const loginResult = await LoginFeature(userName, password);
        console.log(loginResult);
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