import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const ServiceComponent = ({ to, src, img, name, desc, price }) => {
  return (
    <div className='serviceITem'>
      <Link to={to}>
        <div className='imgdiv'>
          <img src={src} alt='' className='img' draggable='false' />
        </div>
      </Link>

      <div className='flex1'>
        <img src={img} alt='' className='avatar' />
        <h6>{name}</h6>
      </div>

      <div className='content'>
        <p>{desc}</p>
        <h5>{price}</h5>
      </div>
    </div >
  )
}

export default ServiceComponent
