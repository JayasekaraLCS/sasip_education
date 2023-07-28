import React from 'react'
import './MakePayments.css'
import Navbar from '../Components/Navbar'
import Namebar from '../Components/Namebar'

export default function MakePayments() {
  return (
    <div className='backgroundstreg'>

      <div className='addnamebar'>
        <Namebar/>
      </div>

      <div className='addnavbar'>
        <Navbar/>
      </div>

      <div className='paymentformdiv'>
            <form id="payment-form" class="payment-form">
                <h2>Make Payments</h2>

                <div class="form-row">
                    <label for="student-id">Student ID:</label>
                    <input type="text" id="student-id" name="student-id" required/>
                </div>

                <div class="form-row">
                    <label for="student-name">Student Name:</label>
                    <input type="text" id="student-name" name="student-name" required/>
                </div>

                <div class="form-row">
                    <label for="grade">Grade:</label>
                    <select id="grade" name="grade">
                    <option value=""disabled>Select the Grade</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    </select>
                </div>

                <div class="form-row">
                  <label for="month">Month:</label>
                  <select id="month" name="month">
                    <option value=""disabled>Select the Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>

                <div class="form-row">
                    <label for="class">Class:</label>
                    <select id="class" name="class">
                    <option value="math1">Mathematics - Roshan Sir</option>
                    <option value="math2">Mathemetics - Kelum sir</option>
                    <option value="science1">Science - Nilu sir</option>
                    <option value="science2">Science - Pradeep sir</option>
                    <option value="english1">English - Lakshika sir</option>
                    <option value="english2">English - Kalpa sir</option>
                    </select>
                </div>

                <div class="form-row">
                    <label for="class-fees">Class Fees:</label>
                    <input type="text" id="class-fees" name="class-fees"/>
                </div>

                <div class="button-container">
                    <button type="submit">Make Payment</button>
                    <button type="reset">Reset</button>
                </div>
            </form>

      </div>

      

    </div>
  )
}
