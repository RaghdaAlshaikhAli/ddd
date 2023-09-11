import React from 'react'
import Card from '../SellerProfile/Portoflio/Card'
import Add from './Add'
const Portoflio = () => {
  return (
    <div className='portoflio'>
        <h3>user's name  Portoflio</h3>
        <div className="portoflio-content">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Add/>
        </div>
    </div>
  )
}

export default Portoflio