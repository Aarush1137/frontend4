import Axios from "axios";
import {Link} from "react-router-dom";

function StudentListRow(props)
{
    const {_id,name,email,rollno} = props.obj; //Object destruction

    const handleClick = () => {
        Axios.delete("https://crud-deployment-backend-4.onrender.com/students/delete-student/"+ _id)
        .then((res)=>{
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollno}</td>
            <td>
                <button class="btn btn-success mx-4">
                    <Link to={"/edit-student/"+_id} class="text-decoration-none text-light">Edit</Link>
                </button>
                <button onClick={handleClick} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}
export default StudentListRow;