import React from 'react'
import './CheckResults.css'
import Namebar from '../Components/Namebar'
import Navbar from '../Components/Navbar'

export default function CheckResults() {
  return (
    <div className='backgroundstreg'>

      <div className='addnamebar'>
        <Namebar/>
      </div>

      <div className='addnavbar'>
        <Navbar/>
      </div>


      <div class="checkResultsBack">

                <table>

                  <tr>

                  <td>
                <div class="form-section">
                  
                <h2>Check Results</h2>
                <label for="student-id">Student ID:</label>
                <input type="text" id="student-id" name="student-id"/>

                <label for="class">Class:</label>
                <select id="class" name="class">
                    <option value="A">Class A</option>
                    <option value="B">Class B</option>
                    <option value="C">Class C</option>
                </select>

                <label for="grade">Grade:</label>
                <select id="grade" name="grade">
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                </select>

                <label for="exam_no">Exam No:</label>
                <select id="exam_no" name="exam_no">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>



                <div class="button-container">
                    <button type="submit">Search</button>
                    <button type="reset">Reset</button>
                </div>

                </div> 

                </td>

                <td>
                <div className='displayresults'>
                  <h2>Results Details</h2>

                  <div className='table-container'></div>
                  {/* to generate a table */}




                </div>
                </td>

                </tr>
                </table>
            </div>

      

    </div>
  )
}
