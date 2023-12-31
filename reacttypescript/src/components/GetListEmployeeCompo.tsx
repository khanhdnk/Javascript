import { useState, useEffect } from "react";
import './../App.css'
import getListEmployee from "../APIs/GetListEmployee";
import { UserInformation } from "../APIs/Interfaces";
import { useNavigate } from "react-router-dom";
import validateToken from "../APIs/validateToken";
import authenAndAuthor from "../APIs/authenAndAuthor";
function GetEmployeesCompo() {
    const [listOfEmployees, setListOfEmployees] = useState<UserInformation[] | undefined>(undefined);
    const [expand, setExpand] = useState(false);
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
        // authenAndAuthor(navigation, setAccessGranted);
    }, [navigation]);

    if (!accessGranted) {
        return null;
    }

    async function handleSubmitGetAllEmployee() {
        const responseGetListEmployee = await getListEmployee();
        if (responseGetListEmployee !== undefined) {
            setListOfEmployees(responseGetListEmployee);
        }
        else{
          navigation('/login')
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
