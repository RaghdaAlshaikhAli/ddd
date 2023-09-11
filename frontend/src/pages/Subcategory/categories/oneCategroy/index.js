import React from 'react'
import './style.scss'

const OneCategory = ({ title, photo, onClick }) => {
    return (
        <div className='OneCategory'
            onClick={onClick}
            style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: 'cover',
                textAlign: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
            <h6>{title}</h6>
        </div>
    )
}

export default OneCategory
