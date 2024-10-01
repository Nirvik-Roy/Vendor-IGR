import React from 'react'
import './Vendortable.css'

import dalil from '../../Images/dalil.png'
import { useSelector } from 'react-redux'
const Vendortable = () => {
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })
  return (
    <>
      <section className='vendor-table-section'>
        <div className='vendor-details-wrapper'>
            <div className={data==true ? 'vendor-table-content2' : 'vendor-table-content' }>
                <div>
                    <h2 className='vendor-details-head'>Vendor Details</h2>
                    <div className='vendor-table-wrapper'>
                        <table className={data==true ?  'vendor-table-main2' : 'vendor-table-main'}>
                            <thead>
                                <tr>
                                    <th className='vendor-table-head'>No</th>
                                    <th className='vendor-table-head'>Project</th>
                                    <th className='vendor-table-head'>Batch</th>
                                    <th className='vendor-table-head'>Deed</th>
                                    <th className='vendor-table-head'>Person</th>
                                    <th className='vendor-table-head'>Qc Operator</th>
                                    <th className='vendor-table-head'>Images</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td className='vendor-table-data'>1</td>
                                    <td className='vendor-table-data'>IGR</td>
                                    <td className='vendor-table-data'>305456</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>Lorem Ipsum</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>
                                        <div className='vendor-image'>
                                             <img src={dalil} alt='Dalil' />
                                        </div>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td className='vendor-table-data'>1</td>
                                    <td className='vendor-table-data'>IGR</td>
                                    <td className='vendor-table-data'>305456</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>Lorem Ipsum</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>
                                        <div className='vendor-image'>
                                             <img src={dalil} alt='Dalil' />
                                        </div>
                                    </td>
                                  
                                </tr>
                                <tr>
                                    <td className='vendor-table-data'>1</td>
                                    <td className='vendor-table-data'>IGR</td>
                                    <td className='vendor-table-data'>305456</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>Lorem Ipsum</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>
                                        <div className='vendor-image'>
                                             <img src={dalil} alt='Dalil' />
                                        </div>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td className='vendor-table-data'>1</td>
                                    <td className='vendor-table-data'>IGR</td>
                                    <td className='vendor-table-data'>305456</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>Lorem Ipsum</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>
                                        <div className='vendor-image'>
                                             <img src={dalil} alt='Dalil' />
                                        </div>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td className='vendor-table-data'>1</td>
                                    <td className='vendor-table-data'>IGR</td>
                                    <td className='vendor-table-data'>305456</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>Lorem Ipsum</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>
                                        <div className='vendor-image'>
                                             <img src={dalil} alt='Dalil' />
                                        </div>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td className='vendor-table-data'>1</td>
                                    <td className='vendor-table-data'>IGR</td>
                                    <td className='vendor-table-data'>305456</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>Lorem Ipsum</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>
                                        <div className='vendor-image'>
                                             <img src={dalil} alt='Dalil' />
                                        </div>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td className='vendor-table-data'>1</td>
                                    <td className='vendor-table-data'>IGR</td>
                                    <td className='vendor-table-data'>305456</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>Lorem Ipsum</td>
                                    <td className='vendor-table-data'>678</td>
                                    <td className='vendor-table-data'>
                                        <div className='vendor-image'>
                                             <img src={dalil} alt='Dalil' />
                                        </div>
                                    </td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Vendortable
