import React from 'react'
import Sidebar from '../../components/Sidebar'
import Content from '../../components/Content'
import Profile from '../../components/Profile'
import './home.css'
function Home() {
  return (
    <div className="Dashboard">
      <Sidebar/>
      <div className='Dashboard--content'>
        <Content/>
        <Profile/>
      </div>
    </div>
  )
}

export default Home