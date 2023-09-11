import React from 'react'
import home from '../../../assets/images/home.png'
import { Link } from 'react-router-dom'
import './style.scss'

const Category = ({ category, desc }) => {
    return (
        <div className='category'>
            <Link to={'/'}>
                <img src={home} alt='' />
            </Link>
            <h2>{category} </h2>
            <p>{desc}</p>
        </div>
    )
}

export default Category
