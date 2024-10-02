import { useState } from 'react'
import React   from 'react'
import './Qcscreen.css'
import dalil from '../Images/dalil.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {useSelector } from 'react-redux'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
const Qcscreen = () => {
    const [toggle,setoggle]=useState(1)
    const [toggle2,setoggle2]=useState(1)
    const navigate =useNavigate()
    const navigatefunc = () =>{
        navigate('/qcscreentable')
        window.scrollTo({top:0,behavior:'instant'})
    }
    const [position,setposition]=useState({
        x: 0,
        y: 0,
        scale:1
      })
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })
       const Deedform = () =>{
        return (<>
              <div className='user-deed'>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>District</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Kolkata' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Where Registered</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='1, Gokhel Road, Bhowanipore' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Year</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='1961' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Book</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='675' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Volume</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='678' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Deed Number</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='678' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Trans Type (Major)</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='sale' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Trans Type (Minor)</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='sale Document' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Page From</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='1' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Page To</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='10' required/>
                </div>


                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Additional Pages</span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='0' required/>
                </div>

                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Document Type</span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Hand Written' required/>
                </div>

                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Date Of Completion</span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='17/7/2023' required/>
                </div>

                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Date Of Delivery</span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='17/7/2023' required/>
                </div>

                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Deed Remarks</span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='17/7/2023' required/>
                </div>
                </div> 
        </>)
       }
       const Personform = () =>{
         return (<>
 
 <div className='user-deed'>
                <h2 className='user1-head mt-3' >Person</h2>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Interest Of The Person</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Agent Under ' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Name</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Mr' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>First & Middle Name</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Lorem' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Last Name</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Ipusum' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Profession</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Advocate' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Cast</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Hindu' required/>
                </div>
                <h2 className='user1-head'>Relation</h2>
                <div className='user-form-radios'>
                    <div className='user-form-radio-input-div'>
                        <input type='radio' className='radio' name='son' value='son' id='son'></input>
                        <label htmlForfor='son' className='userform-raido-label'>Son of</label>
                    </div>
                    <div className='user-form-radio-input-div'>
                        <input type='radio' className='radio' name='daughter' value='daughter' id='daughter'></input>
                        <label htmlForfor='daughter'  className='userform-raido-label'>Daughter of</label>
                    </div>
                    <div className='user-form-radio-input-div'>
                        <input type='radio' className='radio' name='wife' value='wife' id='wife'></input>
                        <label htmlForfor='wife'  className='userform-raido-label'>Wife of</label>
                    </div>
                    <div className='user-form-radio-input-div'>
                        <input type='radio' className='radio' name='father' value='father' id='father'></input>
                        <label htmlForfor='father'  className='userform-raido-label'>Father of</label>
                    </div>
                    <div className='user-form-radio-input-div'>
                        <input type='radio' className='radio' name='mother' value='mother' id='mother'></input>
                        <label htmlForfor='mother'  className='userform-raido-label'>Mother of</label>
                    </div>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Address</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Nabapally Barasat North 24 Porgona' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>District</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='North 24 Porgona' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Ps</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='123' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>City</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Kolkata' required/>
                </div>


                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Pin</span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='700126' required/>
                </div>

              

              

               

                </div>
         </>)
       }
      const Propertyform = () =>{
        return(<>
             <div className='user-deed'>
                <h2 className='user1-head mt-3' >Properties</h2>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>District Name</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Kolkata ' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Ro Office</p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='1, Gokhel Road, Bhowanipore, Kolkata,
 West Bengal 700020' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>PS </p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12345' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Ref Ps </p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12345' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>JL No </p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12345' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Mouza </p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12345' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Ref Mouza  </p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='GP' required/>
                </div>
                <h2 className='user1-head'>Area Type</h2>
                <div className='user-form-radios'>
                    <div className='user-form-radio-input-div'>
                        <input type='radio' className='radio' name='na' value='na' id='NA'></input>
                        <label htmlForfor='NA' className='userform-raido-label'>NA of</label>
                    </div>
                    <div className='user-form-radio-input-div'>
                        <input type='radio' className='radio' name='gp' value='gp' id='GP'></input>
                        <label htmlForfor='GP'  className='userform-raido-label'>GP</label>
                    </div>
                    <div className='user-form-radio-input-div'>
                        <input type='radio' className='radio' name='muni' value='muni' id='MUNI'></input>
                        <label htmlForfor='MUNI'  className='userform-raido-label'>MUNI</label>
                    </div>
                    <div className='user-form-radio-input-div'>
                        <input type='radio' className='radio' name='crop' value='crop' id='CROP'></input>
                        <label htmlForfor='CROP'  className='userform-raido-label'>CROP </label>
                    </div>
                   
                </div>
               
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Word No </p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12345' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Heading No </p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12345' required/>
                </div>
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <p className='user-form-label'>Road Type </p> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='State Highways' required/>
                </div>


                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Premises No </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12345' required/>
                </div>
  
               <h2 className='user1-head fs-5'>Plot Wise Land Details</h2>
              

               <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Property Type  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Commercial' required/>
                </div>

                
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Land Type  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Commercial' required/>
                </div>

                
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Plot Code Type  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Css' required/>
                </div>

                
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Plot No  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12345' required/>
                </div>

                
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Beta No  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12345' required/>
                </div>

                
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Khatian Type  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='Css' required/>
                </div>

                
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Khatian No  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12345' required/>
                </div>

                
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Premises No </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12345' required/>
                </div>
              

                <h2 className='user1-head fs-5'>Property Area Unit</h2>
                  
                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Acre </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12' required/>
                </div>


                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Bigha  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12' required/>
                </div>

                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Decimal  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12' required/>
                </div>

                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Katha  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12' required/>
                </div>

                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Chatak  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12' required/>
                </div>

                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Sqt(Land)  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12' required/>
                </div>

                <div className='user-form-field'>
                <div className=' user-form-label-div'>
                <span className='user-form-label'>Sqt(Structure)  </span> <input className='form-checkbox' type='checkbox'></input>
                </div>
                    <input type='text' className='user-form-input' placeholder='12' required/>
                </div>


                </div> 
        </>)
      }
   
      const mouseEnterZoom=(e)=>{
        let x=e.clientX - e.target.offsetLeft 
        let y=e.clientY - e.target.offsetTop 
        setposition({
          x:x -1000 ,
          y:y -200,
          scale:1.2,
        })
       }
      
       const mouseLeaveZoom=()=>{
        setposition({
          x:0,
          y:0,
          scale:1,
        })
       }
  return (
    <section className='qcscreen-section'>
        <div className='qcscreen-wrapper'>
            <div className={data==true ? 'qc-content2' : 'qc-content' }>
                <div className='user-forms-main'>
            <div className= 'user1-div'>
            <h2 className='user1-head'>Vendor 1</h2>
            <div className='userform-tabs-divs'>
                <button className={`${toggle==1 ? 'userform-deed background':'userform-deed'}`} onClick={(()=>setoggle(1))}>
                   Deed Details
                </button>
                <button className={`${toggle==2 ? 'userform-deed background':'userform-deed'}`} onClick={(()=>setoggle(2))}>
                    Person Details
                </button>
                <button className={`${toggle==3 ? 'userform-deed background':'userform-deed'}`} onClick={(()=>setoggle(3))}>
                    Property Details
                </button>
            </div>
            <form>
         {toggle == 1 ? <Deedform/> : ''}
         {toggle == 2 ? <Personform/> : ''}
         {toggle == 3 ? <Propertyform/> : ''}
           
             

                
            </form>
            </div>
 
            <div className='user3-div'>
                <h2 className='user1-head deed-img-head'>Deed Images</h2>
                <div className='user-form-image-main'>

                <Swiper
        pagination={{
          type: 'fraction',
          
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper custom"
      >
        <SwiperSlide className='custom-slide'   onMouseLeave={(()=>mouseLeaveZoom())}>
        <div className='user-form-image' onMouseMove={((e)=>mouseEnterZoom(e))} >
        <img   style={{transformOrigin:`${position.x}px ${position.y}px`,transform:`scale(${position.scale})`,overflow:'hidden'}} className='image-deed' src={dalil}></img>
        </div>
                
        </SwiperSlide>
        <SwiperSlide className='custom-slide'   onMouseLeave={(()=>mouseLeaveZoom())}>
        <div className='user-form-image' onMouseMove={((e)=>mouseEnterZoom(e))} >
        <img   style={{transformOrigin:`${position.x}px ${position.y}px`,transform:`scale(${position.scale})`,overflow:'hidden'}} className='image-deed' src={dalil}></img>
        </div>
                
        </SwiperSlide>
        <SwiperSlide className='custom-slide'   onMouseLeave={(()=>mouseLeaveZoom())}>
        <div className='user-form-image' onMouseMove={((e)=>mouseEnterZoom(e))} >
        <img   style={{transformOrigin:`${position.x}px ${position.y}px`,transform:`scale(${position.scale})`,overflow:'hidden'}} className='image-deed' src={dalil}></img>
        </div>
                
        </SwiperSlide>
        <SwiperSlide className='custom-slide'   onMouseLeave={(()=>mouseLeaveZoom())}>
        <div className='user-form-image' onMouseMove={((e)=>mouseEnterZoom(e))} >
        <img   style={{transformOrigin:`${position.x}px ${position.y}px`,transform:`scale(${position.scale})`,overflow:'hidden'}} className='image-deed' src={dalil}></img>
        </div>
                
        </SwiperSlide>
      </Swiper>
                
                   
                    
                   
                    
                </div> 
                </div>
            
            </div>
            <div className='d-flex justify-content-center'>
            <button className='qc-submit-btn' onClick={(()=>{navigatefunc()})}>Submit</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Qcscreen