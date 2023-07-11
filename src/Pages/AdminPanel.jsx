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
                              <button type="button" className="viewstudent-button">
                                View Student
                              </button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <button type="button" className="remandupstudent-button">
                                Remove or Update Student
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
                              <button type="button" className="viewteacher-button">
                                View Teacher
                              </button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <button type="button" className="remandupteacher-button">
                                Remove and Update Teacher
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
