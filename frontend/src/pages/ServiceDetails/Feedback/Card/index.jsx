import React from 'react'
import './style.scss'

const Card = () => {
    return (
        <div className='card'>
            <div className="card-header">
                <div className="avatar"><img src="https://placehold.co/600x400" alt="avatar" /></div>
                <div className="username">Joe Joe</div>
            </div>
            <div className="card-content">
                <div className="review">
                    {"⭐".repeat(5)}
                </div>
                <div className="comment">This was my first order using Fiverr and this seller did a fantastic job! The final product was exactly what I wanted. If you're on the fence about who to hire for your next project, do yourself a favour and hire him!</div>
            </div>
        </div>
    )
}

export default Card