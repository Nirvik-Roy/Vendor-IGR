import React, { useRef, useState } from 'react'
import './Ticket.css'
import dalil from '../../Images/dalil.png'
import down from '../../Images/down.png'
import { useSelector } from 'react-redux'
const Ticket = () => {
    const [toggle,setoggle]=useState(2)
    const [dropdown,setdropdown]=useState(false)
    const [images,setimages]=useState([])
    const inputref=useRef()
    const data = useSelector ((state)=>{
      return state.sidebar.isOpen
     })
    const getimages = (event) =>{
        event.preventDefault()
        const file=event.target.files
        setimages([...images,...file])
        inputref.current.value=null
     }
     const handleDelete=(index1)=>{
        setimages(((prevdata)=>prevdata.filter((element,index)=>index!=index1)))
    }
  return (
    <>
      <section className='ticket-section'>
        <div className='ticket-wrapper'>
            <div className={data == true ? 'ticket-content2' : 'ticket-content' }>
                <div className='ticket-tabs'>
                    <button className={toggle==2 ? 'ticket-btn background':'ticket-btn'} onClick={(()=>setoggle(2))}>Running</button>
                    <button className={toggle==3 ? 'ticket-btn background':'ticket-btn'} onClick={(()=>setoggle(3))}>Closed</button>
                </div>
   
           
           {toggle==2 &&      
            
            <>
           

         

           <div>
            <div className='all-ticket-running-section-wrapper'>
           <div className='problem-solution-main'>
           <div className='problem-head-div'>
                <p className='problem-head-para'>The Problem</p>
              </div>
            <div className='problem-div-main'>
            <i class="fa-solid up2 fa-caret-up"></i>
              <div className='problem-details-main'>
                <p className='problem-details-para'>Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,</p>
              </div>
            </div>

            <div className='solution-div-wrapper '>
          

                        <div className='solution-head-main'>
                         <div className='solution-head '>
                            <p className='solution-head-para'>Our Solution</p>
                         </div>
                         </div>
                    
                <div className='solution-div'>
                <i class="fa-solid up fa-caret-up"></i>
                <div className='solution'>
                    <div className='solution-details-main'>
                            <p className='solution-details-para'>Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour</p>
                         </div>
                         </div>
                </div>
                
            </div>

           </div>
           <div className='problem-solution-main'>
           <div className='problem-head-div'>
                <p className='problem-head-para'>The Problem</p>
              </div>
            <div className='problem-div-main'>
            <i class="fa-solid up2 fa-caret-up"></i>
              <div className='problem-details-main'>
                <p className='problem-details-para'>Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,</p>
              </div>
            </div>

            <div className='solution-div-wrapper '>
          

                        <div className='solution-head-main'>
                         <div className='solution-head '>
                            <p className='solution-head-para'>Our Solution</p>
                         </div>
                         </div>
                    
                <div className='solution-div'>
                <i class="fa-solid up fa-caret-up"></i>
                <div className='solution'>
                    <div className='solution-details-main'>
                            <p className='solution-details-para'>Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour</p>
                         </div>
                         </div>
                </div>
                
            </div>

           </div>
           <div className='problem-solution-main'>
           <div className='problem-head-div'>
                <p className='problem-head-para'>The Problem</p>
              </div>
            <div className='problem-div-main'>
            <i class="fa-solid up2 fa-caret-up"></i>
              <div className='problem-details-main'>
                <p className='problem-details-para'>Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,</p>
              </div>
            </div>

            <div className='solution-div-wrapper '>
          

                        <div className='solution-head-main'>
                         <div className='solution-head '>
                            <p className='solution-head-para'>Our Solution</p>
                         </div>
                         </div>
                    
                <div className='solution-div'>
                <i class="fa-solid up fa-caret-up"></i>
                <div className='solution'>
                    <div className='solution-details-main'>
                            <p className='solution-details-para'>Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour</p>
                         </div>
                         </div>
                </div>
                
            </div>

           </div>
           </div>
           <div className='problem-solution-input-box-div'>
           <div className='wrapper-problem-solution'>
           <div className='problem-input-wrapper-div'>
           <input className='problem-solution-input' placeholder='Add your problem'></input>
           </div>
           <button className='send-button'><i class="fa-solid fa-paper-plane"></i></button>
           </div>
           </div>
           </div> 

           </>  }

           {toggle==3 && <>
            <div className='closed-content'>
                <h1 className='problem-solved-head'>Problem Status</h1>
                <div className='problem-status-wrapper'>
                    <div className='problem-solved-box'>
                        <p className='solved-problem-head'>Vendor 1 Problem</p>
                        <div class="progress-container container2">
                       <div class="progress-bar" style={{width:'20%'}}></div>
                       </div>
                       <p className='problem-solved-details'>20 % Problem Solved</p>
                    </div>

                    <div className='problem-solved-box'>
                        <p className='solved-problem-head'>Vendor 2 Problem</p>
                        <div class="progress-container container2">
                       <div class="progress-bar" style={{width:'50%'}}></div>
                       </div>
                       <p className='problem-solved-details'>50 % Problem Solved</p>
                    </div>

                    <div className='problem-solved-box'>
                        <p className='solved-problem-head'>Vendor 3 Problem</p>
                        <div class="progress-container container2">
                       <div class="progress-bar" style={{width:'80%'}}></div>
                       </div>
                       <p className='problem-solved-details'>80 % Problem Solved</p>
                    </div>
                </div>
            </div>
           </>}
            </div>
        </div>
      </section>
    </>
  )
}

export default Ticket
