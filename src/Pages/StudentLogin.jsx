import React from 'react'
import Namebar from '../Components/Namebar'
import './StudentLogin.css'
import { Link } from 'react-router-dom'

export default function StudentLogin() {
  return (
    <div className='backgroundstreg'>

      <div className='addnamebar'>
        <Namebar/>
      </div>

      <div class="section">
        <h1>Student Login</h1>
      <div class="buttons">

        <Link to ='/ViewProfile'>
          <button class="button">View Profile</button>
        </Link>
        
        <Link to = '/CheckResults'>
          <button class="button">Check Results</button>
        </Link>

        <Link to = '/CheckAttendance'>
          <button class="button">Check Attendance</button>
        </Link>

        <Link to = '/CheckPayments'>
          <button class="button">Check Payments</button>
        </Link>
      </div>
      <div class="sign-out">
        <Link to ="/" class="link">Sign Out</Link>
      </div>
    </div>

      

    </div>
  )
}
