import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Invoicerequest.css'
const Invoicerequest = () => {
    const [modal,setmodal]=useState(false)
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })
    const modalfunc = () =>{
        setmodal(true)
        document.body.style.overflowY='hidden'
    }
    const closeModalfunc = ()=>{
        setmodal(false)
        document.body.style.overflowY='scroll'
    }
    const MyModal =()=>{
        return (
            <>
                <div className='modal-wrapper'></div>
                <div className='modal-container'>
                    <div className='modal-head'>
                    <i class="fa-regular fa-circle-xmark modal-cross" onClick={(()=>closeModalfunc())}></i>
                    </div>
                    <div className='modal-input-wrapper'>
                    <div className='modal-form-field'>
                    <div>
                    <p className='modal-input-para'>Requested No of Deed</p>
                    <div className='modal-input-div'>
                    <input className='modal-input' type='text' defaultValue={450} readOnly/>
                    </div>
                    </div>

                    <div className='mt-3'>
                    <p className='modal-input-para'>Payment Released from Deed</p>
                    <div className='modal-input-div'>
                    <input className='modal-input' type='text' defaultValue={300}/>
                    </div>
                    </div>
                  
                  <div className='d-flex justify-content-center mt-4'>
                    <button className='modal-submit-btn'>Submit</button>
                  </div>
                 
                     
                    </div>
                       
                    </div>
                </div>
            </>
        )
    }
  return (
    <>
      <section className='invoice-request-section'>
        <div className='invoice-request-wrapper'>
            <div className={data==true? 'invoice-request-content2':'invoice-request-content'}>
                <h2 className='invoice-request-head'>Invoice Details</h2>
                <div className='invoice-table-wrapper'>
                    <table className= {data==true ? 'invoice-table2':'invoice-table' }>
                        <thead>
                            <tr>
                                <th className='invoice-table-head'>Vendor Name</th>
                                <th className='invoice-table-head'> Project</th>
                                <th className='invoice-table-head'>Batch</th>
                                <th className='invoice-table-head'>No Of Deed</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>

                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>

                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>

                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>


                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>


                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>


                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>

                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>

                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>
                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>
                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>
                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>
                            <tr>
                                <td className='invoice-table-data'>Lorem Ipsum</td>
                                <td className='invoice-table-data'>IGR</td>
                                <td className='invoice-table-data'>304563</td>
                                <td className='invoice-table-data'>560</td>
                                <td >
                                <div>
                                <button className='accept-btn btn' onClick={(()=>{modalfunc()})}>Accept</button>
                                </div>
                                   
                                   
                                </td>
                                <td >
                                <div>
                                <button className=' reject-btn btn'>Reject</button>
                                </div>
                              
                                </td>
                            </tr>

                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {modal && <MyModal/>}
      </section>
    </>
  )
}

export default Invoicerequest
