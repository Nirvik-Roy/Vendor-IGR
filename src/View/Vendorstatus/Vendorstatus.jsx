import React from 'react'
import './Vendorstatus.css'
import edit from '../../Images/edit 1.png'
import trash from '../../Images/trash-2 1.png'
import { useSelector } from 'react-redux'
const Vendorstatus = () => {
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })
  return (
    <>
      <section className='vendor-status-section'>
        <div className='vendor-status-wrapper'>
            <div className={data == true ? 'vendor-status-content2' : 'vendor-status-content' }>
                <div>
                    <h1 className='vendor-status-heading'>Vendor Status</h1>
                </div>
                <div className='vendor-status-table-wrapper'>
                    <table className='vendor-status-table'>
                        <thead>
                            <tr>
                            <th className='vendor-status-table-head'>NO</th>
                                <th className='vendor-status-table-head'>District</th>
                                <th className='vendor-status-table-head'>Where Registered</th>
                                <th className='vendor-status-table-head'>Year</th>
                                <th className='vendor-status-table-head'>Book</th>
                                <th className='vendor-status-table-head'>Volume</th>
                                <th className='vendor-status-table-head'>Deed Number</th>
                                <th className='vendor-status-table-head'>Trans Type(Major)</th>
                                <th className='vendor-status-table-head'>Trans Type(Minor)</th>
                                <th className='vendor-status-table-head'>Page From</th>
                                <th className='vendor-status-table-head'>Page to</th>
                                <th className='vendor-status-table-head'>Additional Pages</th>
                                <th className='vendor-status-table-head'>Document Type</th>
                                <th className='vendor-status-table-head'>Date Of Completion</th>
                                <th className='vendor-status-table-head'>Date Of Delivery</th>
                                <th className='vendor-status-table-head'>Deed Remarks</th>
                                <th className='vendor-status-table-head'>Interest of the Person</th>
                                <th className='vendor-status-table-head'>Name</th>
                                <th className='vendor-status-table-head'>First & Middle Name</th>
                                <th className='vendor-status-table-head'>Last Name</th>
                                <th className='vendor-status-table-head'>Profession</th>
                                <th className='vendor-status-table-head'>Religion</th>
                                <th className='vendor-status-table-head'>Relation</th>
                                <th className='vendor-status-table-head'>Address</th>
                                <th className='vendor-status-table-head'>District</th>
                                <th className='vendor-status-table-head'>Ps</th>
                                <th className='vendor-status-table-head'>City</th>
                                <th className='vendor-status-table-head'>Pin</th>
                                <th className='vendor-status-table-head'>District Name</th>
                                <th className='vendor-status-table-head'>Ro Name</th>
                                <th className='vendor-status-table-head'>PS </th>
                                <th className='vendor-status-table-head'>Ref Ps </th>
                                <th className='vendor-status-table-head'>JL No </th>
                                <th className='vendor-status-table-head'>Mouza </th>
                                <th className='vendor-status-table-head'>Ref Mouza </th>
                                <th className='vendor-status-table-head'>Area Type</th>
                                <th className='vendor-status-table-head'>Word No </th>
                                <th className='vendor-status-table-head'>Heading No </th>
                                <th className='vendor-status-table-head'>Road Type </th>
                                <th className='vendor-status-table-head'>Premises No </th>
                                <th className='vendor-status-table-head'>Property Type </th>
                                <th className='vendor-status-table-head'>Land Type </th>
                                <th className='vendor-status-table-head'>Plot Code Type </th>
                                <th className='vendor-status-table-head'>Plot No </th>
                                <th className='vendor-status-table-head'>Beta No </th>
                                <th className='vendor-status-table-head'>Khatian Type </th>
                                <th className='vendor-status-table-head'>Khatian No </th>
                                <th className='vendor-status-table-head'>Acre </th>
                                <th className='vendor-status-table-head'>Bigha </th>
                                <th className='vendor-status-table-head'>Decimal </th>
                                <th className='vendor-status-table-head'>Katha </th>
                                <th className='vendor-status-table-head'>Chatak </th>
                                <th className='vendor-status-table-head'>Sqt(Land) </th>
                                <th className='vendor-status-table-head'>Sqt(Structure) </th>
                            
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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
                                <td className='vendor-status-table-data'>North 24 Porgona</td>
                                <td className='vendor-status-table-data'>123</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
                                <td className='vendor-status-table-data'>700126</td>
                                <td className='vendor-status-table-data'>Kolkata</td>
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

export default Vendorstatus
