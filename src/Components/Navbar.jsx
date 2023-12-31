import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Navbar() {

  return (
    <div>
        <nav>
            <ul>


                <li className="dropdown">
                <Link to="/AdminPanel" className="dropbtn">Results</Link>
                    <div className="dropdown-content">
                        <Link to ="/AddResults">Add Results</Link>
                        <Link to="/CheckResults">Check Results</Link>
                    </div>
                </li>

                <li className ="dropdown"><Link to ="/AdminPanel" className="dropbtn">Payments</Link>
                    <div className="dropdown-content">
                        <Link to="/MakePayments">Make Payments</Link>
                        <Link to="/CheckPayments">Check Payments</Link>
                        <Link to = "/NotPaymentsDetails">Students not paid</Link>
                    </div>
                </li>


                <li className="dropdown"><Link to="/AdminPanel" className="dropbtn">Reports</Link>
                    <div className="dropdown-content">
                        <Link to="/ResultsReport">Result Report</Link>
                        <Link to="/AttendanceReport">Attendance Report</Link>
                    </div>
                </li>


                <li className="dropdown"><Link to="/AdminPanel" className="dropbtn">Attendance</Link>
                    <div className="dropdown-content">
                        <Link to="/MarkAttendance">Mark Attendance</Link>
                        <Link to="/CheckAttendance">Check Attendance</Link>
                    </div>
                </li>

                <li className ="dropdown"><Link to="/" className="dropbtn">Sign Out</Link></li>

            </ul>
        </nav>
    </div>
  )
}
