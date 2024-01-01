import { useState, useEffect } from "react";
import './../App.css';
import changeEmployee from "../APIs/ChangeEmployee";
import checkRefreshAndAccess from "../APIs/CheckRefreshAndAccess";
import { useNavigate } from "react-router-dom";
function UpdateEmployeeCompo(){
    const [updatedEmployeeId, setupdatedEmployeeId] = useState('');
    const [updateEmployeeName, setUpdateEmployeeName] = useState('');
    const [updateResult, setUpdateResult] = useState("");
    const [accessGranted, setAccessGranted] = useState(false);

    const navigation = useNavigate();
    useEffect(() => {
        const control = async () => {
        const checkResult = await checkRefreshAndAccess();
        if (!checkResult) {
            navigation('/login');
        } else {
            setAccessGranted(true);
        }
        };

        control();
    }, []);

    if (!accessGranted) {
        return null; // or you can render a loading spinner or a message
    }

    async function handleSubmitUpdateEmployee (){
        const changEmployeeResult = await changeEmployee(parseInt(updatedEmployeeId), updateEmployeeName);
        if (changEmployeeResult !== undefined){
            setUpdateResult(changEmployeeResult);
        }
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement>  = e => {
        e.preventDefault()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="api_section">
                    <h1>Change the employee</h1>
                    <label htmlFor="fid">Choose the ID:</label>
                    <input value={updatedEmployeeId} type="text" id="fid" name="fname" onChange={e=> setupdatedEmployeeId(e.target.value)}/><br/>

                    <label htmlFor="fname">Type the Name:</label>
                    <input value={updateEmployeeName} type="text" id="fname" name="fname" onChange={e=> setUpdateEmployeeName(e.target.value)}/><br/>
                    <input className="input_button" type="submit" value="Submit" onClick={handleSubmitUpdateEmployee}/>
                    <p>{updateResult}</p>

                </div>

            </form>
        </>
    );
}

export default UpdateEmployeeCompo;