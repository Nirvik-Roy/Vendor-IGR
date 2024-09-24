import React from 'react'
import sidebarmenulogo from '../Images/Rectangle 16.png'
import flag from '../Images/Rectangle 27.png'
import sidebarlogo from '../Images/Group 1 (1).png'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate =useNavigate()
  return (
    <>
    <section className='sidebar-section'>
      <div className='sidebar-main' >
        <div className='sidebar-menu'>
        <div className='sidebar-cross-main'>
        <div className='d-flex justify-content-end'>
        <div className=' sidebar-cross-div '>
        <i class="fa-solid fa-xmark sidebarcross"></i>
        </div>
        </div>
</div>
        <div className='sidebar-logo-wrapper d-flex justify-content-between'>
        <div className='sidebar-logo'>
            <img src={sidebarlogo} className='sidebar-logo-img'></img>
           </div>
           <div className='flag-div'>
            <img src={flag} className='flag-img'></img>
           </div>
        </div>
           <div className='sidebar-menus-main'>
            <div className='sidebar-icons-wrapper'>
                <img className='sidebar-menus-icon' src={sidebarmenulogo}></img>
                <p className='d-inline-block poppins-regular home-menu' onClick={(()=>navigate('/'))} >Dashboard</p>
            </div>
            <div className='sidebar-icons-wrapper'>
                <img className='sidebar-menus-icon' src={sidebarmenulogo}></img>
                <p className='d-inline-block poppins-regular home-menu' onClick={(()=>navigate('/ticket'))} >Ticket</p>
            </div>
           
         
           </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Sidebar
