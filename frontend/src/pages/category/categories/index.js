import React, { useEffect, useState } from 'react'
import './style.scss'
import { Localhost } from '../../../config/api'

// components
import OneCategory from './oneCategroy'
import { Link } from 'react-router-dom'

const Category = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`${Localhost}/category`)
            .then(res => res.json())
            .then(json => setData(json))
    }, [data])

    return (
        <div className='category'>
            <h3>Shop Our Top Categories</h3>
            <div className='flex'>
                {
                    data && data.map((item, index) => (
                        <Link to={`/category/${item._id}/subCategory`} key={index}>
                            <OneCategory title={item.category} photo={item.imgCover} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Category
