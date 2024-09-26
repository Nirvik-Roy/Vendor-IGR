import React from 'react'
import './Payment.css'
import { useSelector } from 'react-redux'
const Payment = () => {
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })
  return (
    <>
      <section className='payment-section'>
        <div className='payment-wrapper'>
            <div className={data==true ? 'payment-content2' : 'payment-content' }>
                <h2 className='payment-head'>Complete Payment</h2>
                <div className='payment-table-wrapper'>
                    <table className='payment-table'>
                        <thead>
                            <tr>
                                <th className='payment-table-head'>Vendor Name</th>
                                <th className='payment-table-head'>Batch</th>
                                <th className='payment-table-head'>Project</th>
                                <th className='payment-table-head'>Date</th>
                                <th className='payment-table-head'>No of Deed Payment</th>
                                <th className='payment-table-head'> Invoice No</th>

                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='payment-table-data'>Lorem Ipsum</td>
                                    <td className='payment-table-data'>304565</td>
                                    <td className='payment-table-data'>IGR</td>
                                    <td className='payment-table-data'>11/04/2003</td>
                                    <td className='payment-table-data'>450</td>
                                    <td className='payment-table-data'>25</td>
                                </tr>
                                <tr>
                                    <td className='payment-table-data'>Lorem Ipsum</td>
                                    <td className='payment-table-data'>304565</td>
                                    <td className='payment-table-data'>IGR</td>
                                    <td className='payment-table-data'>11/04/2003</td>
                                    <td className='payment-table-data'>450</td>
                                    <td className='payment-table-data'>25</td>
                                </tr>
                                <tr>
                                    <td className='payment-table-data'>Lorem Ipsum</td>
                                    <td className='payment-table-data'>304565</td>
                                    <td className='payment-table-data'>IGR</td>
                                    <td className='payment-table-data'>11/04/2003</td>
                                    <td className='payment-table-data'>450</td>
                                    <td className='payment-table-data'>25</td>
                                </tr>
                                <tr>
                                    <td className='payment-table-data'>Lorem Ipsum</td>
                                    <td className='payment-table-data'>304565</td>
                                    <td className='payment-table-data'>IGR</td>
                                    <td className='payment-table-data'>11/04/2003</td>
                                    <td className='payment-table-data'>450</td>
                                    <td className='payment-table-data'>25</td>
                                </tr>
                                <tr>
                                    <td className='payment-table-data'>Lorem Ipsum</td>
                                    <td className='payment-table-data'>304565</td>
                                    <td className='payment-table-data'>IGR</td>
                                    <td className='payment-table-data'>11/04/2003</td>
                                    <td className='payment-table-data'>450</td>
                                    <td className='payment-table-data'>25</td>
                                </tr>
                                <tr>
                                    <td className='payment-table-data'>Lorem Ipsum</td>
                                    <td className='payment-table-data'>304565</td>
                                    <td className='payment-table-data'>IGR</td>
                                    <td className='payment-table-data'>11/04/2003</td>
                                    <td className='payment-table-data'>450</td>
                                    <td className='payment-table-data'>25</td>
                                </tr>
                                <tr>
                                    <td className='payment-table-data'>Lorem Ipsum</td>
                                    <td className='payment-table-data'>304565</td>
                                    <td className='payment-table-data'>IGR</td>
                                    <td className='payment-table-data'>11/04/2003</td>
                                    <td className='payment-table-data'>450</td>
                                    <td className='payment-table-data'>25</td>
                                </tr>
                                <tr>
                                    <td className='payment-table-data'>Lorem Ipsum</td>
                                    <td className='payment-table-data'>304565</td>
                                    <td className='payment-table-data'>IGR</td>
                                    <td className='payment-table-data'>11/04/2003</td>
                                    <td className='payment-table-data'>450</td>
                                    <td className='payment-table-data'>25</td>
                                </tr>
                                <tr>
                                    <td className='payment-table-data'>Lorem Ipsum</td>
                                    <td className='payment-table-data'>304565</td>
                                    <td className='payment-table-data'>IGR</td>
                                    <td className='payment-table-data'>11/04/2003</td>
                                    <td className='payment-table-data'>450</td>
                                    <td className='payment-table-data'>25</td>
                                </tr>
                                <tr>
                                    <td className='payment-table-data'>Lorem Ipsum</td>
                                    <td className='payment-table-data'>304565</td>
                                    <td className='payment-table-data'>IGR</td>
                                    <td className='payment-table-data'>11/04/2003</td>
                                    <td className='payment-table-data'>450</td>
                                    <td className='payment-table-data'>25</td>
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

export default Payment
