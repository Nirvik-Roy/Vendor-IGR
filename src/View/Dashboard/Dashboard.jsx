import React from 'react'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Dashboard = () => {
    const navigate =useNavigate()
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })
  return (
    <>
      <section className='dashboard-section'>
        <div className='dashboard-wrapper'>
            <div className={data==true ? 'dashboard-content2': 'dashboard-content' }>
                <div className='dashboard-head-div'>
                    <h1 className='dashboard-heading'>Dashboard</h1>
                </div>
                <div className='dashboard-boxes-wrapper'>
                    <div className='dashboard-box' onClick={(()=>navigate('/vendordetails'))}>
                        <p className='dashboard-box-para'>Vendor 1</p>
                        <div className='progress-bar-main'>
                        <p className='progress-bar-para'>80%</p>
                        <div class="progress-container">
                       <div class="progress-bar" style={{width:'80%'}}></div>
                       
                       </div>
                       
                        </div>
                      
                    </div>

                    <div className='dashboard-box'>
                        <p className='dashboard-box-para'>Vendor 2</p>
                        <div className='progress-bar-main'>
                        <p className='progress-bar-para'>70%</p>
                        <div class="progress-container">
                       <div class="progress-bar" style={{width:'70%'}}></div>
                       
                       </div>
                       
                        </div>
                      
                    </div>

                 

                    <div className='dashboard-box'>
                        <p className='dashboard-box-para'>Vendor 3</p>
                        <div className='progress-bar-main'>
                        <p className='progress-bar-para'>50%</p>
                        <div class="progress-container">
                       <div class="progress-bar" style={{width:'50%'}}></div>
                       
                       </div>
                       
                        </div>
                      
                    </div>


                    <div className='dashboard-box'>
                        <p className='dashboard-box-para'>Vendor 4</p>
                        <div className='progress-bar-main'>
                        <p className='progress-bar-para'>60%</p>
                        <div class="progress-container">
                       <div class="progress-bar" style={{width:'60%'}}></div>
                       
                       </div>
                       
                        </div>
                      
                    </div>

                    <div className='dashboard-box'>
                        <p className='dashboard-box-para'>Vendor 5</p>
                        <div className='progress-bar-main'>
                        <p className='progress-bar-para'>50%</p>
                        <div class="progress-container">
                       <div class="progress-bar" style={{width:'50%'}}></div>
                       
                       </div>
                       
                        </div>
                      
                    </div>

                    <div className='dashboard-box' onClick={(()=>navigate('/qctable'))}>
                        <p className='dashboard-box-para' onClick={(()=>navigate('/qctable'))}>Qc Operator</p>
                        <p className='completed-para'>Completed Deed</p>
                        <div className='progress-bar-main'>
                        <p className='progress-bar-para'>20%</p>
                        <div class="progress-container">
                       <div class="progress-bar" style={{width:'20%'}}></div>
                       
                       </div>
                       
                        </div>
                      
                    </div>

                    


                  

                    

                   

                   

                   

                    

                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
