import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav>
            <ul>

                <li class ="dropdown"><Link to ="/AdminPanel" class="dropbtn">Payments</Link>
                    <div class="dropdown-content">
                        <Link to="/MakePayments">Make Payments</Link>
                        <Link to="/CheckPayments">Check Payments</Link>
                    </div>
                </li>

                <li class="dropdown">
                <Link to="/AdminPanel" class="dropbtn">Results</Link>
                    <div class="dropdown-content">
                        <Link to ="/AddResults">Add Results</Link>
                        <Link to="/CheckResults">Check Results</Link>
                    </div>
                </li>

                <li class="dropdown"><Link to="/AdminPanel" class="dropbtn">Attendance</Link>
                    <div class="dropdown-content">
                        <Link to="/MarkAttendance">Mark Attendance</Link>
                        <Link to="/CheckAttendance">Check Attendance</Link>
                    </div>
                </li>

                <li class="dropdown"><Link to="/" class="dropbtn">Reports</Link></li>

                <li class ="dropdown"><Link to="/" class="dropbtn">Sign Out</Link></li>

            </ul>
        </nav>
    </div>
  )
}
