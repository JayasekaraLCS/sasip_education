import React from 'react'
import './TeacherRegistration.css'
import Namebar from '../Components/Namebar'
import Navbar from '../Components/Navbar'

export default function TeacherRegistration() {
  return (
    <div className='backgroundstreg'>

      <div className='addnamebar'>
        <Namebar/>
      </div>

      <div className='addnavbar'>
        <Navbar/>
      </div>

      <div className='body'>
        <form>
            <h2>Teacher Registration Form</h2>
            <hr/>
            <h3>Teacher Details</h3>

            <div class="form-row">
            <label for="TeacherID">TeacherID/UserID:</label>
            <input type="text" id="teacherID" name="TeacherID"/>
            </div>

            <div class="form-row">
            <label for="password">Password:</label>
            <input type="password" id="teacherpassword" name="password" />
            </div>

            <div class="form-row">
            <label for="Teacher Name">Teacher Name:</label>
            <input type="text" id="teachername" name="name" />
            </div>

            
            <div class="form-row">
            <label for="phone">Phone Number:</label>
            <input type="text" id="teacherphone" name="phone" />
            </div>


            <div class="form-row">
            <label for="student-image">Teacher Image:</label>
            <input type="file" id="teacherimage" name="student-image" />
            </div>

            <div class="form-row">
            <label for="teacher-subject">Subject:</label>
            <input type="text" id="teachersubject" name="teachersubject" />
            </div>

            
            <center>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </center>
            
        </form>
        
    </div>

      

    </div>
  )
}
