import { isApiError, ResponseForGetListEmployees } from "./Interfaces";

async function deleteEmployee (id:number): Promise<string|undefined>
{
    try{
        const response = await fetch(`http://localhost:3001/api/employees/delete/${id}`,{
            method: 'DELETE',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json'
            }
            
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseFromServer:ResponseForGetListEmployees = await response.json();
        if (!responseFromServer.status){
            throw new Error("Can't retrieve data")
        }
        return "Successful";
    }catch(error){
        if (isApiError(error)) {
            console.error('API Error: ', error.message, 'Status: ', error.status);
            // Handle specific API errors here
            throw error;
            // return error.message;
        }
    }
}

export default deleteEmployee;