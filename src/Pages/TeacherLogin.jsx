import React from 'react'
import Namebar from '../Components/Namebar'
import './StudentLogin.css'
import { Link } from 'react-router-dom'

export default function TeacherLogin() {
  return (
    <div className='backgroundstreg'>

      <div className='addnamebar'>
        <Namebar/>
      </div>

      <div className="section">
        <h1>Teacher Login</h1>
      <div className="buttons">
        <Link to ='/ViewTeacherProfile'>
          <button className="button">View Profile</button>
        </Link>
        
        <Link to ='/CheckResults'>
          <button className="button">Check Results</button>
        </Link>

        <Link to = '/GenerateReports'>
          <button className="button">Generate Reports</button>
        </Link>


        <Link to ='/CheckAttendance'>
          <button className="button">Check Attendance</button>
        </Link>
        
      </div>
      
      <div className="sign-out">
        <Link to ="/" className="link">Sign Out</Link>
      </div>
    </div>

      

    </div>
  )
}
