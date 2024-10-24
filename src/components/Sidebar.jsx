import React from 'react';
import { Link } from 'react-router-dom';
import {BiBookAlt, BiHome,BiMessage,BiStats, BiUser} from 'react-icons/bi'
import {FaCog, FaExclamationTriangle, FaMoon, FaSignOutAlt, FaSun} from 'react-icons/fa'
import '../styles/Sidebar.css'
function Sidebar(){
    return(
        <div className='menu'>
            <div className="logo">
                <BiBookAlt className='logo-icon'/>
                <h2>NEMOapp</h2>
            </div>
            <div className="menu--list">
                <Link to={'/'} style={{textDecoration:'none'}} className='item'>
                    <BiHome className='icon'/>
                    Accueil
                </Link>
                <a href="#" className='item'>
                    <BiUser className='icon'/>
                    Utilisateurs
                </a>
                <a href="#" className='item'>
                    <BiStats className='icon'/>
                    Statistiques
                </a>
                <a href="#" className='item'>
                    <FaExclamationTriangle className='icon'/>
                    Alertes
                </a>
                <a href="#" className='item'>
                    <BiMessage className='icon'/>
                    Messages
                </a>
                <a href="#" className='item'>
                    <FaCog className='icon'/>
                    Paramètres
                </a>
                <div className='item-1'>
                    <a href="#" className='item-2'>
                        <FaSun className='icon'/>
                    </a>
                    <a href="#" className='item-2'>
                        <FaMoon className='icon'/>
                    </a>
                </div>
                <a href="#" className='item'>
                    <FaSignOutAlt className='icon'/>
                    Deconnexion
                </a>
            </div>
        </div>
    )
}
export default Sidebar;
