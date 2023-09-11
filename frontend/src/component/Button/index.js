import React from 'react'
import './style.scss'

const Button = ({ title, src, color, backgroundColor }) => {
    return (
        <span
            className='mediaBtn'
            style={{ backgroundColor, color }}>
            <img src={src} alt='' />
            <h5>{title}</h5>
        </span>
    )
}

export default Button
