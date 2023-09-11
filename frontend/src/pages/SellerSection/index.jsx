import React from 'react';
import Avatar from './Avatar';
import Description from '../SellerProfile/Description';
import Portflio from './Portoflio';
import Rating from '../SellerProfile/Rating';
import Feedback from '../SellerProfile/Feedback';
import './style.scss'
const SellerSection = () => {
  return (
    <div className='sellerProfile'>
      <div className="left">
        <Avatar />
        <Description />
      </div>
      <div className="right">
        <Rating />
        <Feedback />
        <Portflio />
      </div>
    </div>
  )
}

export default SellerSection