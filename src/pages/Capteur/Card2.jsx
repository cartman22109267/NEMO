import React from 'react'
import {WiHumidity,WiDaySunny} from 'react-icons/wi'
import {FaTachometerAlt,FaMapMarkerAlt,FaTemperatureHigh} from 'react-icons/fa'
import { MdMotionPhotosOn } from 'react-icons/md';
import {Link} from 'react-router-dom'
const Liens=[
    {  
      title :'Humidite',
      icon: <WiHumidity/>,
      page:'Capteur/humidite'
    },
    {
      title :'Vitesse',
      icon: <FaTachometerAlt/>,
      page:'Capteur/Vitesse'
    },
    {
      title :'Luminosite',
      icon : <WiDaySunny/>,
      page:'Capteur/Luminosite'
    }
  ]
  const Liens2 = [  {
    title :'GPS',
    icon : <FaMapMarkerAlt/>,
    page:'Capteur/Gps'
  
  },
  {
    title :'Mouvement',
    icon :  <MdMotionPhotosOn/>,
    page:'Capteur/Mouvement'
  },
  {
    title :'Temperature',
    icon : <FaTemperatureHigh/>,
    page:'Capteur/temperature'
  }]
function Card2() {
  return (
    <div>
        <div className='card--container'>
        {Liens.map((item)=>(
          <Link to={item.page} style={{textDecoration:'none'}} className='card'>
              <div className='card--cover'>{item.icon}</div>
              <div className='card--title'><h2>{item.title}</h2></div>
            
          </Link>
        ))}
      </div>
      <div className='card--container'>
        {Liens2.map((item)=>(
          <Link to={item.page} style={{textDecoration:'none'}}  className='card'>
            <div className='card--cover'>{item.icon}</div>
            <div className='card--title'><h2>{item.title}</h2></div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Card2