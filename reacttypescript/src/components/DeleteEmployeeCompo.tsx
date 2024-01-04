import { useState,useEffect } from "react";
import './../App.css'
import deleteEmployee from "../APIs/DeleteEmployee";
import { useNavigate } from "react-router-dom";
import validateToken from "../APIs/validateToken";
export function DeleteEmployeeCompo(){
    const [deleteEmployeeId, setDeleteEmployeeId] = useState('');
    const [deleteResult, setDeleteResult] = useState('');
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
    }, []);

    if (!accessGranted) {
        return null; // or you can render a loading spinner or a message
    }

    async function handleSubmitDeleteEmployee (){
        const deleteEmployeeResult = await deleteEmployee(parseInt(deleteEmployeeId));
        if (deleteEmployeeResult !== undefined){
            setDeleteResult(deleteEmployeeResult);
        }
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                    <div className="api_section">
                        <h1>Delete</h1>
                        <label htmlFor="did">Choose the ID:</label>
                        <input value={deleteEmployeeId} type="text" id="did" name="did" onChange={e=> setDeleteEmployeeId(e.target.value)}/><br/>
                        <input className="input_button" type="submit" value="Submit" onClick={handleSubmitDeleteEmployee}/>
                        <p>{deleteResult}</p>


                    </div>

            </form>
        </>
    );
}

export default DeleteEmployeeCompo;