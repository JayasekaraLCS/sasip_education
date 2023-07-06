import React from 'react'
import './Example.css'

export default function Example() {
  return (
    <div className='placeform'>

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
                <option value="default">Please select the grade</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
              </select>
              
              <label for="class">Class:</label>
              <select id="class" name="class">
                <option value="default">please select the class</option>
                <option value="math1">Mathematics - Roshan Sir</option>
                <option value="math2">Mathemetics - Kelum sir</option>
                <option value="science1">Science - Nilu sir</option>
                <option value="science2">Science - Pradeep sir</option>
                <option value="english1">English - Lakshika sir</option>
                <option value="english2">English - Kalpa sir</option>
              </select>
              
              <div class="buttons">
                  <button type="submit" >Place Attendance</button>
                  <button type="reset">Reset</button>  
              </div>

          </div> 
  </div>
  )
}

