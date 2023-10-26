import { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";
import Axios from "axios";

function EditStudent()
{
    const {id} = useParams();
    const [data,setData] = useState({name:"",email:"",rollno:""});
    const [newData, setNewData] = useState([]);

    useEffect(()=>{
        Axios.get("https://crud-deployment-backend-4.onrender.com/students/update-student/" + id)
        .then((res)=>{
            if(res.status === 200){
                const {name,email,rollno} = res.data; //name:Raj, email: .. rollno: ..
                setData({name,email,rollno})
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const newObj = {name:newData[0], email: newData[1], rollno: newData[2]};
        Axios.put("https://crud-deployment-backend-4.onrender.com/students/update-student/" + id , newObj)
        .then((res)=>{
            if(res.status === 200){
                alert("Record updated successfully");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
                         nameValue={data.name} 
                        emailValue = {data.email}
                        rollNoValue = {data.rollno}>
                        Update Student
            </StudentForm>
        </form>
    )
}
export default EditStudent;