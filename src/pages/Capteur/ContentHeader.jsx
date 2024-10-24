import React from 'react'
import { BiNotification,BiSearch } from 'react-icons/bi'
function ContentHeader() {
  return (
    <div>
        <div className='content--header'>
            <h1 className="header--title">Capteurs</h1>
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
    </div>
  )
}
export default ContentHeader