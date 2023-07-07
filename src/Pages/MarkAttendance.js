import React from 'react'
import './MarkAttendance.css'
import Namebar from '../Components/Namebar'
import Navbar from '../Components/Navbar'

export default function MarkAttendance() {
  return (
    <div className='backgroundstreg'>

      <div className='addnamebar'>
        <Namebar/>
      </div>

      <div className='addnavbar'>
        <Navbar/>
      </div>

      <div class="markAttendanceBack">

            <table>

              <tr>

              <td>
            <div class="form-section">
            <h2>Mark Student Attendance</h2>
            <label for="student-id">Student ID:</label>
            <input type="text" id="student-id" name="student-id"/>
            
            <div class="image-preview">
                <img id="preview-image" src="" alt="Image Preview"/>
            </div>
            
            <label for="date">Date:</label>
            <input type="date" id="date" name="date"/>
            
            <label for="grade">Grade:</label>
            <select id="grade" name="grade">
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
            </select>
            
            <label for="class">Class:</label>
            <select id="class" name="class">
                <option value="A">Class A</option>
                <option value="B">Class B</option>
                <option value="C">Class C</option>
            </select>
            
            <div class="buttons">
                <button type="submit">Place Attendance</button>
                <button type="reset">Reset</button>
            </div>
            </div> 
            </td>

            <td>
            <div className='displayresults'>
    <h2>Attendance Details</h2>

    
    <div class="scrollable-section"> 
        <table>

          
          <tbody>
            <tr>
              <td>001</td>
              <td>Grade 8</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>

            <tr>
              <td>002</td>
              <td>Grade 9</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>

            <tr>
              <td>003</td>
              <td>Grade 10</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Grade 10</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Grade 10</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Grade 10</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Grade 10</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Grade 10</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Grade 10</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Grade 10</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Grade 10</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Grade 10</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Grade 10</td>
              <td>13:23</td>
              <td>7/6/2023</td>
              <td>Mathematics - Roshan Sir</td>
            </tr>


            
          </tbody>
        </table>
    </div>

    </div>
            </td>
            </tr>
          </table>
</div>



      

    </div>
  )
}
