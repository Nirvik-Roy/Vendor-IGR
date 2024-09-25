import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import loginlogo from '../Images/Ellipse 5.png'
import dropdownlogo from '../Images/Vector (2).png'
import { useSelector } from 'react-redux'
const Header = () => {
  const [dropdown,setdropdown]=useState(false)
  const data = useSelector ((state)=>{
    return state.sidebar.isOpen
   })
  return (
    <>
    <Sidebar/>
      <div className='header-main'>
        <div className= {data==true ?'header-wrapper3' : 'header-wrapper' }>
            <div className='header-divs d-flex justify-content-between '>
            <div className='header-checkbox-div'>
              
              
              {/* <i class="fa-solid fa-bars" onClick={(()=>showsidebar())}></i> */}
              
            </div>
                 <div className='left-header-div'>
                    <p className='poppins-regular header-para'>Vendor IGR Admin</p>
                 </div>
                 <div className='login-logo-div d-flex'>
                    <div className='login-logo'>
                        <img className='login-logo-img' src={loginlogo} onClick={(()=>setdropdown(!dropdown))}></img>
                    </div>
                    <div className='dropdown-logo' onClick={(()=>setdropdown(!dropdown))}>
                        <img src={dropdownlogo} onClick={(()=>setdropdown(!dropdown))}></img>
                    </div>
{dropdown == true ? <>
  <div className='header-dropdown'>
                      <div className='profile-div'>
                      <i class="fa-regular fa-user"></i>
                      <p className='profile-para'>Profile</p>
                      </div>
                      <div className='profile-div'>
                      <i class="fa-solid fa-arrow-right-from-bracket"></i>
                      <p className='profile-para'>Log out</p>
                      </div>
                    </div>
</>:''}
                 
                 </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
