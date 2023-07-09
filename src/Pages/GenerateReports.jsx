import React from 'react'
import './GenerateReports.css'
import Namebar from '../Components/Namebar'
import Navbar from '../Components/Navbar'

export default function GenerateReports() {
  return (
    <div className='backgroundstreg'>

      <div className='addnamebar'>
        <Namebar/>
      </div>

      <div className='addnavbar'>
        <Navbar/>
      </div>


      <div class="row">
            <div class="form-section">
              <h2>Obtain Attendance Reports</h2>
              <label for="student-id">Student ID:</label>
              <input type="text" id="student-id" name="student-id" />
              <label for="class-name">Class Name:</label>
              <select id="class-name" name="class-name">
                <option value="math1">Mathematics - Roshan Sir</option>
                <option value="math2">Mathematics - Kelum Sir</option>
                <option value="science1">Science - Nilu Sir</option>
                <option value="science2">Science - Pradeep Sir</option>
              </select>
              <label for="month">Month:</label>
              <select id="month" name="month">
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                
              </select>
              <div class="buttons">
                <button type="submit">Print</button>
                <button type="reset">Reset</button>
              </div>
              </div>

            <div class="form-section">
              <h2>Obtain Result Reports</h2>
              <label for="grade">Grade:</label>
              <select id="grade" name="grade">
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                
              </select>
              <label for="exam-no">Exam No:</label>
              <select id="exam-no" name="exam-no">
                <option value="exam1">Exam 1</option>
                <option value="exam2">Exam 2</option>
                <option value="exam3">Exam 3</option>
                
              </select>
              <label for="class-name">Class Name:</label>
              <select id="class-name" name="class-name">
                <option value="math1">Mathematics - Roshan Sir</option>
                <option value="math2">Mathematics - Kelum Sir</option>
                <option value="science1">Science - Nilu Sir</option>
                <option value="science2">Science - Pradeep Sir</option>
              </select>
              <div class="buttons">
                <button type="submit">Print</button>
                <button type="reset">Reset</button>
              </div>
            </div>
      </div>

      

    </div>
  )
}
