import React from 'react'
import './style.css'


const Label = ({ title }) => {
    return (
        <div className='lab'>
            <label>{title}</label>
        </div>
    )
}

export default Label
