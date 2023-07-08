import React from 'react'
import Namebar from '../Components/Namebar'
import Navbar from '../Components/Navbar'
import './AdminPanel.css'
import Status from '../Components/Status'


export default function AdminPanel() {
  return (
  <div className='container'>

      <div className='addnamebar'>
        <Namebar/>
      </div>

      <div className='addnavbar'>
        <Navbar/>
      </div>

      
      <div className='addstatusbar'>
        <Status/>
      </div>

      <div className='row'>

              <div className='addborder1'>
                  <div className="studentsection">
                    <h1 className="section-title">Student Section</h1>

                    <div className="stcredentials">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <button type="button" className="registerstudent-button">
                                Student Registration
                              </button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <button type="button" className="updatestudent-button">
                                Update Student
                              </button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <button type="button" className="removestudent-button">
                                Remove Student
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
        </div>


        <div className='addborder2'>
                  <div className="studentsection">
                    <h1 className="section-title">Teacher Section</h1>

                    <div className="stcredentials">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <button type="button" className="registerteacher-button">
                                Teacher Registration
                              </button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <button type="button" className="updateteacher-button">
                                Update Teacher
                              </button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <button type="button" className="removeteacher-button">
                                Remove Teacher
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
        </div>
    </div>   
  </div>  

    

  )
}
