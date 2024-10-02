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
        <div className={ data==true ?  'sidebar-menu2' : 'sidebar-menu' }>
        <div className='sidebar-cross-main'>
        <div className='d-flex justify-content-end'>
        <div className=' sidebar-cross-div '>
        <i class="fa-solid fa-xmark sidebarcross"></i>
        </div>
        </div>
</div>

        <div className={data == true ? 'sidebar-logo-wrapper2 d-flex justify-content-between': 'sidebar-logo-wrapper d-flex justify-content-between ' }>
        <i class="fa-solid fa-caret-left" onClick={(()=>sidebarfunc())}></i>
        <div className= {data==true ? 'invisible' : 'sidebar-logo'}>
            <img src={sidebarlogo} className='sidebar-logo-img'></img>
           </div>
           <div className={data==true ? 'invisible' : 'flag-div' }>
            <img src={flag} className='flag-img'></img>
           </div>
        </div>


           <div className={data==true ? 'invisible' : 'sidebar-menus-main'} >
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

            <div className='sidebar-icons-wrapper'>
                <img className='sidebar-menus-icon' src={sidebarmenulogo}></img>
                <p className='d-inline-block poppins-regular home-menu' onClick={(()=>navigate('/invoicerequest'))}>Invoice Requested</p>
            </div>
            <div className='sidebar-icons-wrapper'>
                <img className='sidebar-menus-icon' src={sidebarmenulogo}></img>
                <p className='d-inline-block poppins-regular home-menu' onClick={(()=>navigate('/payment'))}>Payment Complete</p>
            </div>

            <div className='sidebar-icons-wrapper'>
                <img className='sidebar-menus-icon' src={sidebarmenulogo}></img>
                <p className='d-inline-block poppins-regular home-menu' onClick={(()=>navigate('/qcscreen'))}>Qc Screen</p>
            </div>
         
           </div>
          
          <div className={data==false ? 'invisible' : 'responsive-sidebar'}>
          <div className='sidebar-logo2' onClick={(()=>{navigate('/')})}>
          <i class="fa-solid fa-chart-line icon"></i>
          <span className='dashboard-span'>Dashboard</span>
          </div>
         

          <div className='sidebar-logo2' onClick={(()=>{navigate('/ticket')})}>
          <i class="fa-solid fa-ticket icon"></i>
          <span className='dashboard-span'>Ticket</span>
          </div>

          <div className='sidebar-logo2' onClick={(()=>{navigate('/vendorassignment')})}>
          <i class="fa-regular fa-note-sticky icon"></i>
          <span className='dashboard-span'>Assignment</span>
          </div>
        
          <div className='sidebar-logo2' onClick={(()=>{navigate('/invoicerequest')})}>
          <i class="fa-solid fa-file-invoice icon" ></i>
          <span className='dashboard-span'>Invoice</span>
          </div>
          <div className='sidebar-logo2' onClick={(()=>{navigate('/payment')})}>
          <i class="fa-regular fa-credit-card icon"></i>
          <span className='dashboard-span'>Payment</span>
          </div>


          <div className='sidebar-logo2' onClick={(()=>{navigate('/qcscreen')})}>
          <i class="fa-brands fa-wpforms icon"></i>
          <span className='dashboard-span'>Qc Screen</span>
          </div>
        
</div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Sidebar
