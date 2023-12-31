import { useState } from "react";
import './../App.css'
import getListEmployee from "../APIs/GetListEmployee";
import { UserInformation } from "../APIs/Interfaces";


function GetEmployeesCompo(){
    const [listOfEmployees, setListOfEmployees] = useState<UserInformation[]|undefined>(undefined);
    const [expand, setExpand] = useState(false);

    async function handleSubmitGetAllEmployee (){
        const responseGetListEmployee = await getListEmployee();
        if (responseGetListEmployee!== undefined){
            setListOfEmployees(responseGetListEmployee);
        }
        setExpand(true);
    }   

    // const handleSubmit:React.FormEventHandler<HTMLFormElement>  = e => {
    //     e.preventDefault()
    // }

    return(
        <div className="api_section">
            <h1>Get full data</h1>
            {/* <p>{data? data.forEach(displayData): ''}</p> */}
            <div className={ `expand ${expand && 'add1fr'}`}>

                <div >
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOfEmployees && listOfEmployees.map(employee=><tr key={employee.id}><td>{employee.id}</td><td>{employee.name}</td></tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <br/>
            <button onClick={handleSubmitGetAllEmployee}>Get method</button>

        </div>
    );
}

export default GetEmployeesCompo;