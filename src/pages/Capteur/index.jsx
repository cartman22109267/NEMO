import React from 'react'
import Sidebar from '../../components/Sidebar'
import './capteur.css'
import Content2 from './Content2'
function index() {
  return (
    <div className="Dashboard">
      <Sidebar/>
      <div className='Dashboard--content'>
        <Content2/>
      </div>
    </div>
  )
}

export default index