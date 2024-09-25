import React from 'react'
import '../Vendorstatus/Vendorstatus.css'
import edit from '../Images/edit 1.png'
import trash from '../Images/trash-2 1.png'
import dalil from '../Images/dalil.png'
import { useSelector } from 'react-redux'
const Completeddeed = () => {
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })
  return (
    <>
            <section className='vendor-status-section'>
        <div className='vendor-status-wrapper'>
            <div className={data==true ? 'vendor-status-content2' : 'vendor-status-content' }>
                <div>
                    <h1 className='vendor-status-heading'>Deed Status</h1>
                </div>
                <div className='vendor-status-table-wrapper'>
                    <table className='vendor-status-table'>
                        <thead>
                            <tr>
                            <th className='vendor-status-table-head2'>NO</th>
                                <th className='vendor-status-table-head2'>District</th>
                                <th className='vendor-status-table-head2'>Where Registered</th>
                                <th className='vendor-status-table-head2'>Year</th>
                                <th className='vendor-status-table-head2'>Book</th>
                                <th className='vendor-status-table-head2'>Volume</th>
                                <th className='vendor-status-table-head2'>Deed Number</th>
                                <th className='vendor-status-table-head2'>Trans Type(Major)</th>
                                <th className='vendor-status-table-head2'>Trans Type(Minor)</th>
                                <th className='vendor-status-table-head2'>Page From</th>
                                <th className='vendor-status-table-head2'>Page to</th>
                                <th className='vendor-status-table-head2'>Additional Pages</th>
                                <th className='vendor-status-table-head2'>Document Type</th>
                                <th className='vendor-status-table-head2'>Date Of Completion</th>
                                <th className='vendor-status-table-head2'>Date Of Delivery</th>
                                <th className='vendor-status-table-head2'>Deed Remarks</th>
                                <th className='vendor-status-table-head2'>Interest of the Person</th>
                                <th className='vendor-status-table-head2'>Name</th>
                                <th className='vendor-status-table-head2'>First & Middle Name</th>
                                <th className='vendor-status-table-head2'>Last Name</th>
                                <th className='vendor-status-table-head2'>Profession</th>
                                <th className='vendor-status-table-head2'>Religion</th>
                                <th className='vendor-status-table-head2'>Relation</th>
                                <th className='vendor-status-table-head2'>Address</th>

                                

                                <th className='vendor-status-table-head2'>Ps</th>
                                <th className='vendor-status-table-head2'>City</th>
                                <th className='vendor-status-table-head2'>Pin</th>


                                

                                <th className='vendor-status-table-head2'>Ro Name</th>
                                <th className='vendor-status-table-head2'>PS </th>
                                <th className='vendor-status-table-head2'>Ref Ps </th>
                                <th className='vendor-status-table-head2'>JL No </th>
                                <th className='vendor-status-table-head2'>Mouza </th>
                                <th className='vendor-status-table-head2'>Ref Mouza </th>
                                <th className='vendor-status-table-head2'>Area Type</th>
                                <th className='vendor-status-table-head2'>Word No </th>
                                <th className='vendor-status-table-head2'>heading No </th>
                                <th className='vendor-status-table-head2'>Road Type </th>
                                <th className='vendor-status-table-head2'>Premises No </th>
                                <th className='vendor-status-table-head2'>Property Type </th>
                                <th className='vendor-status-table-head2'>Land Type </th>
                                <th className='vendor-status-table-head2'>Plot Code Type </th>
                                <th className='vendor-status-table-head2'>Plot No </th>
                                <th className='vendor-status-table-head2'>Beta No </th>
                                <th className='vendor-status-table-head2'>Khatian Type </th>
                                <th className='vendor-status-table-head2'>Khatian No </th>
                                <th className='vendor-status-table-head2'>Acre </th>
                                <th className='vendor-status-table-head2'>Bigha </th>
                                <th className='vendor-status-table-head2'>Decimal </th>
                                <th className='vendor-status-table-head2'>Katha </th>
                                <th className='vendor-status-table-head2'>Chatak </th>
                                <th className='vendor-status-table-head2'>Sqt(Land) </th>
                                <th className='vendor-status-table-head2'>Sqt(Structure) </th>
                                <th className='vendor-status-table-head2 '>Images (User 1)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
                                </td>
                            </tr>

                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
                                </td>
                            </tr>


                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
                                </td>
                            </tr>


                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
                                </td>
                            </tr>


                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
                                </td>
                            </tr>


                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
                                </td>
                            </tr>


                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
                                </td>
                            </tr>


                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
                                </td>
                            </tr>


                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
                                </td>
                            </tr>


                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
                                </td>
                            </tr>


                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
                                </td>
                            </tr>


                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
                                </td>
                            </tr>


                            <tr>
                            <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore</td>
                                <td className='vendor-status-table-data'>1961</td>
                                <td className='vendor-status-table-data'>675</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>678</td>
                                <td className='vendor-status-table-data'>sale</td>
                                <td className='vendor-status-table-data'>sale Document</td>
                                <td className='vendor-status-table-data'>1</td>
                                <td className='vendor-status-table-data'>10</td>
                                <td className='vendor-status-table-data'>0</td>
                                <td className='vendor-status-table-data'>Hand Written</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>17/7/2023</td>
                                <td className='vendor-status-table-data'>Agent Under </td>
                                <td className='vendor-status-table-data'>Mr</td>
                                <td className='vendor-status-table-data'>Lorem</td>
                                <td className='vendor-status-table-data'>Ipusum</td>
                                <td className='vendor-status-table-data'>Advocate</td>
                                <td className='vendor-status-table-data'>Hindu</td>
                                <td className='vendor-status-table-data'>Son Of</td>
                                <td className='vendor-status-table-data'>Nabapally Barasat North 24 Porgona</td>
                               
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                              
                                <td className='vendor-status-table-data'>1, Gokhel Road, Bhowanipore, Kolkata,
                                West Bengal 700020</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>NA</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>State Highways</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Commercial</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>Css</td>
                                <td className='vendor-status-table-data'>12345</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>12</td>
                                <td className='vendor-status-table-data'>
                                     <div className='image-div'>
                                        <img src={dalil}></img>
                                     </div>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={edit}></img>
                                </td>
                                <td className='vendor-status-table-data'>
                                    <img src={trash}></img>
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

export default Completeddeed
