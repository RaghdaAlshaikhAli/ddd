import React from 'react'
import './style.scss'


const Input = ({ name, placeholder, type, value, onChange,onBlur,className }) => {
    return (
        <div className='inputdiv'>
            <input
                className={`loginInput ${className}`}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                />
        </div>
    )
}

export default Input
