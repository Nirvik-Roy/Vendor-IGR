import React, { useRef, useState } from 'react'
import './Ticket.css'
import dalil from '../Images/dalil.png'
import down from '../Images/down.png'
const Ticket = () => {
    const [toggle,setoggle]=useState(true)
    const [dropdown,setdropdown]=useState(false)
    const [images,setimages]=useState([])
    const inputref=useRef()

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
            <div className='ticket-content'>
                <div className='ticket-tabs'>
                    <button className={toggle==1 ? 'ticket-btn background':'ticket-btn'} onClick={(()=>setoggle(1))}>Create Ticket</button>
                    <button className={toggle==2 ? 'ticket-btn background':'ticket-btn'} onClick={(()=>setoggle(2))}>Running</button>
                    <button className={toggle==3 ? 'ticket-btn background':'ticket-btn'} onClick={(()=>setoggle(3))}>Closed</button>
                </div>
    {toggle==1 &&      <div>
                <div className='vendors-name-filed-div'>
                    <p className='vendor-para'>Vendor Name</p>
                    <div className='vendor-input-div'>
                    <input className='vendor-filed' type='text' placeholder='Vendor Name' />
                    </div>
                 
                </div>

               <div className='vendor-problem-dropdown-filed'>
                <p className='dropdown-problem-para'>Select Problem</p>
                <div className='problem-dropdown-input'>
                    <input onClick={(()=>setdropdown(!dropdown))} className='problem-input' placeholder='Evidence Problem'></input>
                    <img onClick={(()=>setdropdown(!dropdown))} src={down}></img>
    {dropdown &&        <div className='problem-dropdown'>
                        <p className='problem-para'>Evidence Problem</p>
                        <p className='problem-para'>Data Entry Problem</p>
                        
                    </div>}          
                </div>
               </div>

                <div className='vendors-name-filed-div'>
                    <p className='vendor-para'>Problem</p>
                    <div className='vendor-input-div'>
                    <textarea className='vendor-filed2' type='text' placeholder='Your Problems' />
                    </div>
                 
                </div>

                <div className='image-upload-head'>
                    <p className='image-upload-para'>Image Upload</p>
                    <div className='plus-btn-div'>
                    <button className='plus-btn btn'>+</button>
                    <input ref={inputref} onChange={((e)=>getimages(e))} multiple className='file' type='file'></input>
                    </div>
                   
                </div>
                <div className='image-upload-wrapper'>
            {images.map((element,index)=>{
               return(
                <div className='image-upload-div ' key={index}>
                        <div className='image-cross-div'>
                             <i onClick={(()=>handleDelete(index))} class="fa-regular fa-circle-xmark circle-cross-icon"></i>
                        </div>
                         <div className='d-flex justify-content-center'>
                        <div className='image-display-div'>
                           <img key={index} src={URL.createObjectURL(element)}></img>
                        </div>
                        
</div>
<div  key={index} className='image-number-btn d-flex justify-content-center'>
                            <button  key={index} className='image-number-btn-text'>{index + 1}</button>
                        </div>
                    </div>
               )
                    
               
            })}
                   
            
              
               
                 
                 
                  
                </div>

                <div className='submit-btn-div d-flex justify-content-center'>
                    <button className='submit-btn btn'>Submit</button>
                </div>
</div> }            
           
           {toggle==2 &&      
            
            <>
           

         

           

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
