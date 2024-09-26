import React from 'react'
import './Qctable.css'
import edit from '../Images/edit 1.png'
import trash from '../Images/trash-2 1.png'
import { useSelector } from 'react-redux'
const Qctable = () => {
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })
  return (
    <>
      <section className='qc-table-section'></section>
      <div className='qc-table-wrapper'>
        <div className={data==true ? 'qc-table-content2' : 'qc-table-content' }>
            <h2 className='qc-heading'>Operator Details</h2>
            <div className='qc-table-main'>
                <table className={data==true ? 'qc-table2' : 'qc-table' }>
                    <thead>
                        <tr>
                            <th className='qc-table-head'>No</th>
                            <th className='qc-table-head'>Project</th>
                            <th className='qc-table-head'>Batch</th>
                            <th className='qc-table-head'>Vendor Name</th>
                            <th className='qc-table-head'>Deed Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='qc-table-data'>1</td>
                            <td className='qc-table-data'>IGR</td>
                            <td className='qc-table-data'>304565</td>
                            <td className='qc-table-data'>ABC Construction</td>
                            <td className='qc-table-data'>Deed 1234</td>
                           
                        </tr>
                        <tr>
                            <td className='qc-table-data'>1</td>
                            <td className='qc-table-data'>IGR</td>
                            <td className='qc-table-data'>304565</td>
                            <td className='qc-table-data'>ABC Construction</td>
                            <td className='qc-table-data'>Deed 1234</td>
                           
                        </tr>
                        <tr>
                            <td className='qc-table-data'>1</td>
                            <td className='qc-table-data'>IGR</td>
                            <td className='qc-table-data'>304565</td>
                            <td className='qc-table-data'>ABC Construction</td>
                            <td className='qc-table-data'>Deed 1234</td>
                           
                        </tr>
                        <tr>
                            <td className='qc-table-data'>1</td>
                            <td className='qc-table-data'>IGR</td>
                            <td className='qc-table-data'>304565</td>
                            <td className='qc-table-data'>ABC Construction</td>
                            <td className='qc-table-data'>Deed 1234</td>
                           
                        </tr>
                        <tr>
                            <td className='qc-table-data'>1</td>
                            <td className='qc-table-data'>IGR</td>
                            <td className='qc-table-data'>304565</td>
                            <td className='qc-table-data'>ABC Construction</td>
                            <td className='qc-table-data'>Deed 1234</td>
                           
                        </tr>
                        <tr>
                            <td className='qc-table-data'>1</td>
                            <td className='qc-table-data'>IGR</td>
                            <td className='qc-table-data'>304565</td>
                            <td className='qc-table-data'>ABC Construction</td>
                            <td className='qc-table-data'>Deed 1234</td>
                           
                        </tr>
                        <tr>
                            <td className='qc-table-data'>1</td>
                            <td className='qc-table-data'>IGR</td>
                            <td className='qc-table-data'>304565</td>
                            <td className='qc-table-data'>ABC Construction</td>
                            <td className='qc-table-data'>Deed 1234</td>
                           
                        </tr>
                        <tr>
                            <td className='qc-table-data'>1</td>
                            <td className='qc-table-data'>IGR</td>
                            <td className='qc-table-data'>304565</td>
                            <td className='qc-table-data'>ABC Construction</td>
                            <td className='qc-table-data'>Deed 1234</td>
                           
                        </tr>
                        <tr>
                            <td className='qc-table-data'>1</td>
                            <td className='qc-table-data'>IGR</td>
                            <td className='qc-table-data'>304565</td>
                            <td className='qc-table-data'>ABC Construction</td>
                            <td className='qc-table-data'>Deed 1234</td>
                           
                        </tr>
                        <tr>
                            <td className='qc-table-data'>1</td>
                            <td className='qc-table-data'>IGR</td>
                            <td className='qc-table-data'>304565</td>
                            <td className='qc-table-data'>ABC Construction</td>
                            <td className='qc-table-data'>Deed 1234</td>
                           
                        </tr>
                        <tr>
                            <td className='qc-table-data'>1</td>
                            <td className='qc-table-data'>IGR</td>
                            <td className='qc-table-data'>304565</td>
                            <td className='qc-table-data'>ABC Construction</td>
                            <td className='qc-table-data'>Deed 1234</td>
                           
                        </tr>
                        <tr>
                            <td className='qc-table-data'>1</td>
                            <td className='qc-table-data'>IGR</td>
                            <td className='qc-table-data'>304565</td>
                            <td className='qc-table-data'>ABC Construction</td>
                            <td className='qc-table-data'>Deed 1234</td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Qctable
