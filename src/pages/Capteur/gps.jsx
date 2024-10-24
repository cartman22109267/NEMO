import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import './capteur.css'
import {DataGrid}  from "@mui/x-data-grid"
import { BiNotification, BiSearch } from 'react-icons/bi'
import {userColumns,userRows} from '../../datasource'
function gps() {
  const actionColumn=[{field:'Action',hearderName:'Action',width:200,renderCell:(params) => {
    return(
      <div className="cellAction">
        <Link to="/users/test" style={{textDecoration:'none'}}><div className="viewButton">view</div></Link>
        <Link to={'/'} className="editbutton"><EditIcon/></Link>
        <div className="deleteButton">
          <button>
              <DeleteIcon className="button"/>
          </button>
        </div>
      </div>
    )
  }}]
  return (
    <div className="Dashboard">
      <Sidebar/>
      <div className='Dashboard--content'>
        <div className='content'>
          <div className='content--header'>
              <h1 className="header--title">GPS</h1>
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
                  Add New GPS
                  <Link to='/users/new1' state={{textDecoration:'none'}} className="link"><FaPlusCircle/> Add New</Link>
                </div>
                <DataGrid className="datagrid" rows={userRows} columns={userColumns.concat(actionColumn)} disableRowSelectionOnClick pageSizeOptions={[10, 25,100]}  autoHeight checkboxSelection/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default gps