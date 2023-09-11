import './style.scss';
import React from 'react';
import Avatar from './Avatar';
import Description from './Description';
import Portflio from './Portoflio';
import Rating from './Rating';
import Feedback from './Feedback';

const SellerProfile = () => {
    return (
        <div className='sellerProfile'>
            <div className="left">
                <Avatar />
                <Description />
            </div>
            <div className="right">
                <Portflio />
                <Rating />
                <Feedback/>
            </div>
        </div>
    )
}

export default SellerProfile