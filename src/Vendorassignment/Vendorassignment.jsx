import React from 'react'
import './Vendorassignment.css'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
const Vendorassignment = () => {
    const navigate =useNavigate()
    const navigatefunc = (event) => {
        event.preventDefault()
        navigate('/assignmenttable')
    }
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })
  return (
    <>
      
      <section className='vendor-assignment-section'>
        <div className='vendor-assignment-wrapper'>
            <div className={data==true ? 'vendor-assignment-content2' : 'vendor-assignment-content' }>
                <h1 className='vendor-assignment-head'>Vendor Assignment</h1>
                <form>
                    <div className='assignment-field'>
                        <label className='label'>Project</label>
                        <div className='assignment-input-div'>
                        <input className='assignment-input' defaultValue={'IGR'}></input>
                        </div>
                       
                    </div>

                    <div className='assignment-field'>
                        <label className='label'>Batch</label>
                        <div className='assignment-input-div'>
                        <input className='assignment-input' defaultValue={'304569'}></input>
                        </div>
                       
                    </div>

                    <div className='assignment-field'>
                        <label className='label'>Vendor</label>
                        <div className='assignment-input-div'>
                        <input className='assignment-input' defaultValue={'Lorem Ipsum'}></input>
                        </div>
                       
                    </div>
                    <div className='button-div2'>
                        <button className='submit-btn2 ' onClick={((e)=>navigatefunc(e))}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
      </section>
      
    </>
  )
}

export default Vendorassignment
