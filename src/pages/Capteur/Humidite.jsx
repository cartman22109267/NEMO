import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import './capteur.css'
import { BiNotification, BiSearch } from 'react-icons/bi'
function Humidite() {
  return (
    <div className="Dashboard">
      <Sidebar/>
      <div className='Dashboard--content'>
        <div className='content'>
          <div className='content--header'>
              <h1 className="header--title">Humidite</h1>
              <div className="header--activity">
                  <div className="search--box">
                      <input type="text" placeholder='Rechercher...' />
                      <BiSearch className='icon'/>
                  </div>
              <div className="notify">
                  <BiNotification className='icon'/>
              </div>
            </div>
          </div>
          <div className="list">
            <div className="listcontainer">
              <div className="datatable">
                <div className="datatabletitle">
                  Add New User
                  <Link to='/users/new1' state={{textDecoration:'none'}} className="link"><FaPlusCircle/> Add New</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Humidite