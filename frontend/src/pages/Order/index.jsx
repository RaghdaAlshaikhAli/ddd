import React from 'react'
import './style.scss';
import Title from './Title';
import Content from './Content';
import Payment from './payment';

const Order = () => {
  return (
    <div className='orderPages'>
        <Title/>
        <Content/>
        <Payment/>
    </div>
  )
}

export default Order