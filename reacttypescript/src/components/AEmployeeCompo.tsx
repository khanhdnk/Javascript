import { useState, useEffect } from "react";
import { UserInformation } from "../APIs/Interfaces";
import './../App.css'
import getAnEmployee from "../APIs/GetAnEmployee";
import { useNavigate } from "react-router-dom";
import validateToken from "../APIs/validateToken";
function GetAnEmployeeCompo(){
    const [employeeID, setEmployeeId] = useState('');
    const [getAnEmployeeResult, setGetAnEmployeeResult] = useState<UserInformation|undefined>(undefined);
    const [accessGranted, setAccessGranted] = useState(false);

    const navigation = useNavigate();
    useEffect(() => {
        const resultChecking =async () => {
          const result = await validateToken();
          if (result){
            setAccessGranted(true);
          }else{
            navigation('/login')
          }
        };
        resultChecking();
    }, [navigation]);

    if (!accessGranted) {
        return null;
    }
    async function handleSubmitGetAnEmployee (){
        const resultGetAnEmployee = await getAnEmployee(parseInt(employeeID));
        if (resultGetAnEmployee !== undefined){
            setGetAnEmployeeResult(resultGetAnEmployee);
        }
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement>  = e => {
        e.preventDefault()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="api_section">
                    <h1>Get the employee by ID</h1>
                    <label htmlFor="fid">Choose the ID:</label>
                    <input value={employeeID} type="text" id="fid" name="fname" onChange={e=> setEmployeeId(e.target.value)}/><br/>
                    <input className="input_button" type="submit" value="Submit" onClick={handleSubmitGetAnEmployee}/>

                    <p>{getAnEmployeeResult? `ID: ${getAnEmployeeResult.id}, Name: ${getAnEmployeeResult.name}`:''}</p>

                </div>
            </form>
        </>
    );
}

export default GetAnEmployeeCompo;