import React from 'react'
import './StudentRegistration.css'
import Namebar from '../Components/Namebar'
import Navbar from '../Components/Navbar'

export default function StudentRegistration() {
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
            <h2>Student Registration Form</h2>
            <hr/>
            <h3>Student Details</h3>

            <div class="form-row">
            <label for="student-number">Student Number/UserID:</label>
            <input type="text" id="stnumber" name="student-number"/>
            </div>

            <div class="form-row">
            <label for="password">Password:</label>
            <input type="password" id="stpassword" name="password" />
            </div>

            <div class="form-row">
            <label for="name">Name:</label>
            <input type="text" id="stname" name="name" />
            </div>

            <div class="form-row">
            <label for="school">School:</label>
            <input type="text" id="school" name="school" />
            </div>

            <div class="form-row">
            <label for="address">Address:</label>
            <input type="text" id="staddress" name="address" />
            </div>

            <div class="form-row">
            <label for="phone">Phone Number:</label>
            <input type="text" id="stphone" name="phone" />
            </div>

            <div class="form-row">
            <label for="grade">Grade:</label>
            <select id="grade" name="grade">
                <option value="default">Select the grade</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
            </select>
            </div>

            <div class="form-row">
            <label for="student-image">Student Image:</label>
            <input type="file" id="stimage" name="student-image" />
            </div>

            <div class="form-row">
            <label for="classes-attend">Classes Attend:</label>
            <div class="checkbox-group" >

            <label for="Mathematics - Roshan Sir">
            <input type="checkbox" id="math1" name="classes-attend" value="math"/>
            Mathematics - Roshan Sir
            </label>

            <label for="Mathematics - Kalum Sir">
            <input type="checkbox" id="math2" name="classes-attend" value="math"/>
            Mathematics - Kalum Sir
            </label>

            <label for="Science - Pradeep sir">
            <input type="checkbox" id="science1" name="classes-attend" value="science"/>
            Science - Pradeep Sir
            </label>

            <label for="Science - Nilu sir">
            <input type="checkbox" id="science2" name="classes-attend" value="science"/>
            Science - Nilu Sir
            </label>

            <label for="English - Lakshika sir">
            <input type="checkbox" id="english1" name="classes-attend" value="english"/>
            English - Lakshika sir
            </label>
            
            <label for="English - Kalpa sir">
            <input type="checkbox" id="english2" name="classes-attend" value="english"/>
            English - Kalpa sir
            </label>



            </div>
            </div>

            <hr/>
            <h3>Parent Details</h3>

            <div class="form-row">
            <label for="parent-id">ParentID:</label>
            <input type="text" id="parentid" name="parent-id" />
            </div>

            <div class="form-row">
            <label for="parent-name">Parent Name:</label>
            <input type="text" id="parentname" name="parent-name" />
            </div>

            <div class="form-row">
            <label for="parent-address">Address:</label>
            <input type="text" id="parentaddress" name="parent-address" />
            </div>

            <div class="form-row">
            <label for="nic-number">NIC Number:</label>
            <input type="text" id="nic-number" name="nic-number" />
            </div>

            <div class="form-row">
            <label for="parent-phone">Phone Number:</label>
            <input type="text" id="parentphone" name="parent-phone" />
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
