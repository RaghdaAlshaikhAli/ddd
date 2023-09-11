import React, { useState } from 'react'
import serv from '../../../assets/images/serv.jpg'
import love from '../../../assets/images/love.png'
import outline from '../../../assets/images/outline.png'
import './style.scss'

const FavComponent = ({ src, title, desc }) => {
    const [fav, setFav] = useState(false)
    const handleClick = () => {
        setFav(!fav)
    }

    return (
        <div className='favComponent'>
            <img src={serv} alt='' className='servImg' />
            {
                fav ? <img src={love} alt='' onClick={handleClick} className='love' />
                    : <img src={outline} onClick={handleClick} alt='' className='love' />
            }

            {/* <img src={src} alt='' /> */}
            <h5>title</h5>

            {/* <h3>{title}</h3> */}
            <p>w4UWGBexTjNXNczkdhLhZyUDAXaROLx05
                axBjXxEJ4iuD8WGXSdGWHsMeYbshseYELr9Jv8f9GGVfKshqxkBYAbmiQMGpxk7Il9QTkhGmAr40u</p>
            {/* <p>{desc}</p> */}
        </div>
    )
}

export default FavComponent
