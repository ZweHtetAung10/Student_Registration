import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate = useNavigate()

    const {studentID} = useParams()

    const [user, setUser] = useState({
        fullName: "",
        age: "",
        address: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        gender: "",
        course: ""
    })

    const { fullName, age, address, email, phoneNumber, dateOfBirth, gender, course } = user

    const onInputChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        loadUsers()
    },[])

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/students/${studentID}`,user)
        navigate("/")
    }

    const loadUsers = async ()=>{
        const result = await axios.get(`http://localhost:8080/students/${studentID}`)
        setUser(result.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit Student</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor="FullName" className='form-lable'>Full Name</label>
                            <input type={"text"} className='form-control' placeholder='Enter Age' name='fullName' value={fullName} onChange={(e) => onInputChange(e)} />

                            <label htmlFor="Age" className='form-lable'>Age</label>
                            <input type={"text"} className='form-control' placeholder='Enter Age' name='age' value={age} onChange={(e) => onInputChange(e)} />

                            <label htmlFor="Address" className='form-lable'>Address</label>
                            <input type={"text"} className='form-control' placeholder='Enter Address' name='address' value={address} onChange={(e) => onInputChange(e)} />

                            <label htmlFor="Email" className='form-lable'>Email</label>
                            <input type={"text"} className='form-control' placeholder='Enter Email' name='email' value={email} onChange={(e) => onInputChange(e)} />

                            <label htmlFor="PhoneNumber" className='form-lable'>Phone Number</label>
                            <input type={"text"} className='form-control' placeholder='Enter Phone Number' name='phoneNumber' value={phoneNumber} onChange={(e) => onInputChange(e)} />

                            <label htmlFor="DateOfBirth" className='form-lable'>Date Of Birth</label>
                            <input type={"text"} className='form-control' placeholder='Enter Date Of Birth' name='dateOfBirth' value={dateOfBirth} onChange={(e) => onInputChange(e)} />

                            <label htmlFor="Gender" className='form-lable'>Gender</label>
                            <input type={"text"} className='form-control' placeholder='Enter Gender' name='gender' value={gender} onChange={(e) => onInputChange(e)} />

                            <label htmlFor="Course" className='form-lable'>Course</label>
                            <input type={"text"} className='form-control' placeholder='Enter Course' name='course' value={course} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link className='btn btn-outline-danger mx-2' to = "/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
