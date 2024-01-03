import { useState, useEffect } from "react";
import './../App.css'
import getListEmployee from "../APIs/GetListEmployee";
import { UserInformation } from "../APIs/Interfaces";
import checkRefreshAndAccess from "../APIs/CheckRefreshAndAccess";
import { useNavigate } from "react-router-dom";

function GetEmployeesCompo() {
    const [listOfEmployees, setListOfEmployees] = useState<UserInformation[] | undefined>(undefined);
    const [expand, setExpand] = useState(false);
    const [accessGranted, setAccessGranted] = useState(false);
    
    const navigation = useNavigate();
    // useEffect(() => {
    //     const control = async () => {
    //     const checkResult = await checkRefreshAndAccess();
    //     if (!checkResult) {
    //       console.log("out")
    //         navigation('/login');
    //     } else {
    //         setAccessGranted(true);
    //     }
    //     };

    //     control();
    // }, []);

    // if (!accessGranted) {
    //     return null; // or you can render a loading spinner or a message
    // }

    async function handleSubmitGetAllEmployee() {
        const responseGetListEmployee = await getListEmployee();
        if (responseGetListEmployee !== undefined) {
            setListOfEmployees(responseGetListEmployee);
        }
        setExpand(true);
    }


  return (
    <div className="api_section">
      <h1>Get full data</h1>
      <div className={`expand ${expand && 'add1fr'}`}>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {listOfEmployees && listOfEmployees.map(employee => <tr key={employee.id}><td>{employee.id}</td><td>{employee.name}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <button onClick={handleSubmitGetAllEmployee}>Get method</button>
    </div>
  );
}

export default GetEmployeesCompo;
