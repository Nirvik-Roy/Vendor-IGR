import React from 'react'
import './Assignmenttable.css'
import edit from '../../Images/edit 1.png'
import trash from '../../Images/trash-2 1.png'

import { useSelector } from'react-redux'
const Assignmenttable = () => {
     const data = useSelector ((state)=>{
          return state.sidebar.isOpen
         })
  return (
    <>
      <section className='assignmenttable-section'>
        <div className='assignmenttable-wrapper'>
            <div className={data==true ? 'assignmenttable-content2' : 'assignmenttable-content'}>
                <h1 className='assignmenttable-heading'>Vendor Assignment Details</h1>
                <div className='assignmenttable-main'>
                    <table className= {data==true ? 'assignmenttable2' : 'assignmenttable' }>
                        <thead>
                            <tr>
                                <th className='assignmenttable-head'>No</th>
                                <th className='assignmenttable-head'>Project</th>
                                <th className='assignmenttable-head'>Batch</th>
                                <th className='assignmenttable-head'>Vendor</th>
                                <th className='assignmenttable-head'>Edit</th>
                                <th className='assignmenttable-head'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='assignmenttable-data'>1</td>
                                <td className='assignmenttable-data'>IGR</td>
                                <td className='assignmenttable-data'>304563</td>
                                <td className='assignmenttable-data'>Lorem Ipsum</td>
                                <td className='assignmenttable-data'>
                                     <img src={edit} alt='edit' />
                                </td>
                                <td className='assignmenttable-data'>
                                     <img src={trash} alt='edit' />
                                </td>
                            </tr>
                            <tr>
                                <td className='assignmenttable-data'>1</td>
                                <td className='assignmenttable-data'>IGR</td>
                                <td className='assignmenttable-data'>304563</td>
                                <td className='assignmenttable-data'>Lorem Ipsum</td>
                                <td className='assignmenttable-data'>
                                     <img src={edit} alt='edit' />
                                </td>
                                <td className='assignmenttable-data'>
                                     <img src={trash} alt='edit' />
                                </td>
                            </tr>
                            <tr>
                                <td className='assignmenttable-data'>1</td>
                                <td className='assignmenttable-data'>IGR</td>
                                <td className='assignmenttable-data'>304563</td>
                                <td className='assignmenttable-data'>Lorem Ipsum</td>
                                <td className='assignmenttable-data'>
                                     <img src={edit} alt='edit' />
                                </td>
                                <td className='assignmenttable-data'>
                                     <img src={trash} alt='edit' />
                                </td>
                            </tr>
                            <tr>
                                <td className='assignmenttable-data'>1</td>
                                <td className='assignmenttable-data'>IGR</td>
                                <td className='assignmenttable-data'>304563</td>
                                <td className='assignmenttable-data'>Lorem Ipsum</td>
                                <td className='assignmenttable-data'>
                                     <img src={edit} alt='edit' />
                                </td>
                                <td className='assignmenttable-data'>
                                     <img src={trash} alt='edit' />
                                </td>
                            </tr>
                            <tr>
                                <td className='assignmenttable-data'>1</td>
                                <td className='assignmenttable-data'>IGR</td>
                                <td className='assignmenttable-data'>304563</td>
                                <td className='assignmenttable-data'>Lorem Ipsum</td>
                                <td className='assignmenttable-data'>
                                     <img src={edit} alt='edit' />
                                </td>
                                <td className='assignmenttable-data'>
                                     <img src={trash} alt='edit' />
                                </td>
                            </tr>
                            <tr>
                                <td className='assignmenttable-data'>1</td>
                                <td className='assignmenttable-data'>IGR</td>
                                <td className='assignmenttable-data'>304563</td>
                                <td className='assignmenttable-data'>Lorem Ipsum</td>
                                <td className='assignmenttable-data'>
                                     <img src={edit} alt='edit' />
                                </td>
                                <td className='assignmenttable-data'>
                                     <img src={trash} alt='edit' />
                                </td>
                            </tr>
                            <tr>
                                <td className='assignmenttable-data'>1</td>
                                <td className='assignmenttable-data'>IGR</td>
                                <td className='assignmenttable-data'>304563</td>
                                <td className='assignmenttable-data'>Lorem Ipsum</td>
                                <td className='assignmenttable-data'>
                                     <img src={edit} alt='edit' />
                                </td>
                                <td className='assignmenttable-data'>
                                     <img src={trash} alt='edit' />
                                </td>
                            </tr>
                            <tr>
                                <td className='assignmenttable-data'>1</td>
                                <td className='assignmenttable-data'>IGR</td>
                                <td className='assignmenttable-data'>304563</td>
                                <td className='assignmenttable-data'>Lorem Ipsum</td>
                                <td className='assignmenttable-data'>
                                     <img src={edit} alt='edit' />
                                </td>
                                <td className='assignmenttable-data'>
                                     <img src={trash} alt='edit' />
                                </td>
                            </tr>
                            <tr>
                                <td className='assignmenttable-data'>1</td>
                                <td className='assignmenttable-data'>IGR</td>
                                <td className='assignmenttable-data'>304563</td>
                                <td className='assignmenttable-data'>Lorem Ipsum</td>
                                <td className='assignmenttable-data'>
                                     <img src={edit} alt='edit' />
                                </td>
                                <td className='assignmenttable-data'>
                                     <img src={trash} alt='edit' />
                                </td>
                            </tr>
                            <tr>
                                <td className='assignmenttable-data'>1</td>
                                <td className='assignmenttable-data'>IGR</td>
                                <td className='assignmenttable-data'>304563</td>
                                <td className='assignmenttable-data'>Lorem Ipsum</td>
                                <td className='assignmenttable-data'>
                                     <img src={edit} alt='edit' />
                                </td>
                                <td className='assignmenttable-data'>
                                     <img src={trash} alt='edit' />
                                </td>
                            </tr>
                            <tr>
                                <td className='assignmenttable-data'>1</td>
                                <td className='assignmenttable-data'>IGR</td>
                                <td className='assignmenttable-data'>304563</td>
                                <td className='assignmenttable-data'>Lorem Ipsum</td>
                                <td className='assignmenttable-data'>
                                     <img src={edit} alt='edit' />
                                </td>
                                <td className='assignmenttable-data'>
                                     <img src={trash} alt='edit' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Assignmenttable
