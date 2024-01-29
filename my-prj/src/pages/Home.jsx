import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


export default function Home() {

    const [users, setUsers] = useState([])


    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers = async()=>{
        const result = await axios.get("http://localhost:8080/students")
        setUsers(result.data);
    }
    
    //To delete the users information 

    const deleteUser = async (studentID) => {
        try {
            await axios.delete(`http://localhost:8080/students?studentID=${studentID}`); 
            loadUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };
    
    

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Date Of Birth</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => (
                                <tr  key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{user.fullName}</td>
                                <td>{user.age}</td>
                                <td>{user.address}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.dateOfBirth}</td>
                                <td>{user.gender}</td>
                                <td>{user.course}</td>
                                <td>
                                    <Link className='btn btn-primary mx-2' to={`/viewuser/${user.studentID}`}>View</Link>
                                    <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.studentID}`}>Edit</Link>
                                    <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.studentID) }>Delete</button>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
