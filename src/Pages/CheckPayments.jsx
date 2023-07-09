import React from 'react'
import './CheckPayments.css'
import Navbar from '../Components/Navbar'
import Namebar from '../Components/Namebar'


export default function CheckPayments() {
  return (
    <div className='backgroundstreg'>

      <div className='addnamebar'>
        <Namebar/>
      </div>

      <div className='addnavbar'>
        <Navbar/>
      </div>

        <div class="checkPaymentsBack">

                <table>

                <tr>

                <td>
                <div class="form-section">

                <h2>Check Payments</h2>
                <label for="student-id">Student ID:</label>
                <input type="text" id="student-id" name="student-id"/>

                <div class="button-container">
                    <button type="submit">View Payments</button>
                    <button type="reset">Reset</button>
                </div>

                </div> 
                </td>

                <td>
                <div className='displayPayments'>
                  <h2>Payment Details</h2>

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
