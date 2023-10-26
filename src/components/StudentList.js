import Axios from "axios";
import {useEffect, useState} from "react";
import StudentListRow from "./StudentListRow";

function StudentList()
{
    const [arr,setArr] = useState([]);

    useEffect(()=>{
        Axios.get("https://crud-deployment-backend-4.onrender.com/students")
        .then((res)=>{
            if(res.status === 200){
                console.log(res.data);
                setArr(res.data);
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])

    const ListItems = () => {
        return arr.map((val,ind)=>{ 
            return <StudentListRow key={ind} obj={val}  />
        })
    }

    return (
        <table style={{maxWidth:"50%"}} class="mx-auto table table-success table-striped table-bordered">
            <thead>
                <tr style={{backgroundColor:"forestgreen"}}>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Roll Number</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}
export default StudentList;