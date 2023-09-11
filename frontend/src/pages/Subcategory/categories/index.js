import React, { useEffect, useState } from 'react'
import './style.scss'
import { Localhost } from '../../../config/api'

// components
import OneCategory from './oneCategroy'
import { Link, useParams } from 'react-router-dom'

const Category = () => {
    const params = useParams();
    const CatId = params.CatId;
    const [data, setData] = useState([])

    useEffect(() => {
        if (CatId) {
            fetch(`${Localhost}/category/${CatId}/subCategory`)
                .then(res => res.json())
                .then(json => setData(json))
                .catch(error => console.error('Error fetching subcategories:', error));
        }
    }, [CatId])

    return (
        <div className='category'>
            <h3>Shop Our Top Categories</h3>
            <div className='flex'>
                {
                    data?.map((item, index) => (
                        <Link key={index} to={`/subCategory/${item._id}/service`}>
                            <OneCategory title={item.sub_category} photo={item.imgCover} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Category
