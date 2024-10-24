import React from 'react'
import '../styles/profile.css'
import ProfileHeader from './ProfileHeader'
import { BiUserCircle } from 'react-icons/bi'
import {FaUserTie,FaCamera, FaCar, FaShippingFast, FaTruck, FaBroom, FaArrowAltCircleRight } from 'react-icons/fa'
const employes =[
  {
    poste:'conducteurs',
    role:'Camions',
    icon:<FaTruck/>
  },
  {
    poste:'conducteurs',
    role:'voitures',
    icon:<FaCar/>
  },
  {
    poste:'Maintenace',
    role:'materiel et logiciel',
    icon:<FaUserTie/>
  },
  {
    poste:'Maintenance',
    role:'menage',
    icon:<FaBroom/>
  },
  {
    poste:'surveillance',
    role:'cameras',
    icon:<FaCamera/>
  }
]
const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader/>
      <div className='user--profile'>
        <div className='user--detail'>
          <BiUserCircle className='user'/>
          <h3 className='username'>MAELLE OLIVE</h3>
          <span className='poste'>directeur general</span>
        </div>
        <div className='user--gestion'>
          {employes.map((employee) =>(
            <div className='gestion'>
              <div className='gestion--detail'>
                <div className='gestion--cover'>{employee.icon}</div>
                <div className='gestion-name'>
                  <h5 className='title'>{employee.poste}</h5>
                  <span className='role'>{employee.role}</span>
                </div>
              </div>
              <div className='action'><FaArrowAltCircleRight/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
