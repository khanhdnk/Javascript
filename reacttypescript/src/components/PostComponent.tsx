import { useState, useEffect } from "react";
import './../App.css'
import addEmployee from "../APIs/AddEmployee";
import checkRefreshAndAccess from "../APIs/CheckRefreshAndAccess";
import { useNavigate } from "react-router-dom";
function PostEmployeeCompo(){
    const [addEmployeeId, setaddEmployeeId] = useState('');
    const [addEmployeeName, setaddEmployeeName] = useState('');
    const [postResult, setPostResult] = useState('');
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
    

    async function handleSubmitAddEmployee (){
        const addEmployeeResult = await addEmployee(parseInt(addEmployeeId), addEmployeeName);
        if (addEmployeeResult !== undefined){
            setPostResult(addEmployeeResult);

        }
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement>  = e => {
        e.preventDefault()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="api_section">
                    
                    <h1>Post</h1>
                    <label htmlFor="addEmployeeId">Choose the ID:</label>
                    <input value={addEmployeeId} type="text" id="addEmployeeId" name="addEmployeeId" onChange={e=> setaddEmployeeId(e.target.value)}/><br/>

                    <label htmlFor="addEmployeeName">Choose the Name:</label>
                    <input value={addEmployeeName} type="text" id="addEmployeeName" name="addEmployeeName" onChange={e=> setaddEmployeeName(e.target.value)}/><br/>
                    <input className="input_button" type="submit" value="Submit" onClick={handleSubmitAddEmployee}/>
                    <p>{postResult}</p>
                </div>

            </form>
        </>
    );
}

export default PostEmployeeCompo;