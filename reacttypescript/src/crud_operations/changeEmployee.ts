import { isApiError, ResponseForGetListEmployees } from "./Interfaces";
async function changeEmployee(id: number, name: string){
    try{
        const response = await fetch(`http://localhost:3001/api/employees/edit/${id}`,{
            method: 'PUT',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
            
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseFromServer: ResponseForGetListEmployees  = await response.json();
        if (!responseFromServer.status){
            throw new Error("Can't retrieve data")
        }
        return "Successful";
         
        

    }catch(error){
        if (isApiError(error)){
            console.error('Error fetching data:', error.message);
            throw error;

        }
    }
}

export default changeEmployee;