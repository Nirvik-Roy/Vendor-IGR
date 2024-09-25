import React from 'react'
import sidebarmenulogo from '../Images/Rectangle 16.png'
import flag from '../Images/Rectangle 27.png'
import sidebarlogo from '../Images/Group 1 (1).png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../Stores/Slices/Sidebarslices'
const Sidebar = () => {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const data = useSelector ((state)=>{
   return state.sidebar.isOpen
  })
 
  const sidebarfunc = () =>{
    dispatch(toggleSidebar())
  }
  return (
    <>
    <section className='sidebar-section'>
      <div className='sidebar-main' >
        <div className={ data==true ?  'sidebar-menu translate' : 'sidebar-menu' }>
        <div className='sidebar-cross-main'>
        <div className='d-flex justify-content-end'>
        <div className=' sidebar-cross-div '>
        <i class="fa-solid fa-xmark sidebarcross"></i>
        </div>
        </div>
</div>

        <div className='sidebar-logo-wrapper d-flex justify-content-between'>
        <i class="fa-solid fa-caret-left" onClick={(()=>sidebarfunc())}></i>
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
            <div className='sidebar-icons-wrapper'>
                <img className='sidebar-menus-icon' src={sidebarmenulogo}></img>
                <p className='d-inline-block poppins-regular home-menu' onClick={(()=>navigate('/vendorassignment'))} >Assignment</p>
            </div>
         
           </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Sidebar
