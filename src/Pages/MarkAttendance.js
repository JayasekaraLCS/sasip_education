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

      

    </div>
  )
}
