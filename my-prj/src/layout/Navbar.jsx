import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#" to={"/"}>Student Registration</Link>
          <button className="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className='btn btn-primary mx-2'to='/adduser'>Add User</Link>
        </div>
      </nav>
    </div>
  )
}
