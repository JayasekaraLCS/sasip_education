import React from 'react'
import './Pagesetup.css'
import Namebar from './Namebar'
import Navbar from './Navbar'

export default function PageSetup() {
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
