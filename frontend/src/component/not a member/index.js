import React from 'react'
import './style.scss'

const Not = ({ title, ques, href }) => {
    return (
        <div className='quesDiv'>
            <p>{title}? <a href={href} className='ques'>{ques}</a></p>
        </div>
    )
}

export default Not
