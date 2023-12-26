import { useState } from "react";
import { UserInformation } from "../crud_operations/Interfaces";
import './../App.css'
import getAnEmployee from "../crud_operations/getAnEmployee";

function GetAnEmployeeCompo(){
    const [employeeID, setEmployeeId] = useState('');
    const [getAnEmployeeResult, setGetAnEmployeeResult] = useState<UserInformation|undefined>(undefined);

    async function handleSubmitGetAnEmployee (){
        let resultGetAnEmployee = await getAnEmployee(parseInt(employeeID));
        if (resultGetAnEmployee !== undefined)
        setGetAnEmployeeResult(resultGetAnEmployee);
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