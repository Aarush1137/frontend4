import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";

function CreateStudent()
{
    const [arr,setArr] = useState([]);
    //[Shankar,shankar@gmail.com,1]
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Creating a record...");
        const data = {name: arr[0], email: arr[1], rollno: arr[2]}
        Axios.post("https://crud-deployment-backend-4.onrender.com/students/create-student",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added to DB");
            else {
                alert("res.status:"+ res.status)
                Promise.reject();
            }
        })
        .catch((err)=>console.log(err));
    }
    const getState = (out) => {
        setArr(out);
    }

    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} 
            nameValue="" emailValue = "" rollNoValue = "">
                Create Student
            </StudentForm>
        </form>
    )
}
export default CreateStudent;