import React from 'react';
import img1 from '../../../assets/images/amazon.png';
import img3 from '../../../assets/images/visa.png';
import img4 from '../../../assets/images/payment-method-png-payment-methods-1024.png';
import img5 from '../../../assets/images/method 3.png';
import img2 from '../../../assets/images/covernelwork.png';

const Payment = () => {
  return (
    <div className='payment'>
      <div className="title">Payment Method</div>
      <div className="methods">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>
    </div>
  )
}

export default Payment