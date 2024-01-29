import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user,setUser] = useState({
        fullName:"",
        age: "",
        address: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        gender: "",
        course: ""
    })

    const {studentID} = useParams();

    useEffect (()=>{
        loadUser()
    },[])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/students/${studentID}`)
        setUser(result.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Student Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Detail for Student ID : {user.studentID}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Fullname : </b>
                                    {user.fullName}
                                </li>

                                <li className='list-group-item'>
                                    <b>Age :</b>
                                    {user.age}
                                </li>
                                
                                <li className='list-group-item'>
                                    <b>Address :</b>
                                    {user.address}
                                </li>

                                <li className='list-group-item'>
                                    <b>Email :</b>
                                    {user.email}
                                </li>

                                <li className='list-group-item'>
                                    <b>Phone Number :</b>
                                    {user.phoneNumber}
                                </li>

                                <li className='list-group-item'>
                                    <b>Date Of Birth :</b>
                                    {user.dateOfBirth}
                                </li>

                                <li className='list-group-item'>
                                    <b>Gender :</b>
                                    {user.gender}
                                </li>

                                <li className='list-group-item'>
                                    <b>Course :</b>
                                    {user.course}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link>
                </div>
            </div>
        </div>
    )
}
