import React from 'react'
import {FaTruck,FaMicrochip,FaCar, FaShippingFast, FaCamera, FaWifi} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Liens=[
  {  
    title :'Camion',
    icon: <FaTruck/>,
    page:'./Camion/index.jsx'
  },
  {
    title :'Capteurs',
    icon: <FaMicrochip/>,
    page:'./Capteur'
  },
  {
    title :'Voitures',
    icon : <FaCar/>,
    page:'/Voiture'
  }
]
const Liens2 = [  {
  title :'Conteneurs',
  icon : <FaShippingFast/>,
  page:'/Conteneurs'

},
{
  title :'Cameras',
  icon : <FaCamera/>,
  page:'/Cameras'
},
{
  title :'Iot',
  icon : <FaWifi/>,
  page:'/Iot'
},
] 
function Card() {
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
          <Link to={'item.page'} style={{textDecoration:'none'}}  className='card'>
            <div href='#' className='card--cover'>{item.icon}</div>
            <div href='#' className='card--title'><h2>{item.title}</h2></div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Card
