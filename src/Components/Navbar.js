import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li class ="dropdown"><a href="#" class="dropbtn">Users</a>
                    <div class="dropdown-content">
                        <a href="#">Student</a>
                        <a href="#">Teacher</a>
                    </div>
                </li>

                <li class ="dropdown"><a href="#" class="dropbtn">Payments</a>
                    <div class="dropdown-content">
                        <a href="#">Make Payments</a>
                        <a href="#">Check Payments</a>
                    </div>
                </li>

                <li class="dropdown">
                <a href="#" class="dropbtn">Results</a>
                    <div class="dropdown-content">
                        <a href="#">Add Results</a>
                        <a href="#">Check Results</a>
                    </div>
                </li>

                <li class="dropdown"><a href="#" class="dropbtn">Attendance</a>
                    <div class="dropdown-content">
                        <a href="#">Mark Attendance</a>
                        <a href="#">Check Attendance</a>
                    </div>
                </li>

                <li class="dropdown"><a href="#" class="dropbtn">Reports</a>
                    <div class="dropdown-content">
                        <a href="#">Attendance Report</a>
                        <a href="#">Results Report</a>
                    </div>
                </li>

                <li class ="dropdown"><a href="#" class="dropbtn">Sign Out</a></li>

            </ul>
        </nav>
    </div>
  )
}
