import React, { useState } from 'react';
import './style.scss';
import man from '../../assets/images/man.jpg'
import { Stars } from '../../assets/icons';
import serv from '../../assets/images/serv.jpg'
import AboutThisGig from './About this gig';
import AboutSellerPage from './about seller';

const ServiceDetailsPage = () => {
    const [open, setOpen] = useState(false)
    const [cancel, setCancel] = useState(false)

    const handleClick = () => {
        setOpen(!open)
        setCancel(!cancel)
    }
    // Dummy data for service details
    const service = {
        title: 'Web Development',
        description: 'I will create a responsive website for your business.',
        price: 50,
        img: man,
        service: serv,
        stars: Stars,
        seller: {
            name: 'John Doe',
            rating: 4.8,
            reviews: 156,
            location: 'United States'
        },
    };

    return (
        <div className="service-details-page">
            <img src={service.service} alt='' className='serviceImg' />
            <div className='content'>
                <h3 className="service-description">{service.description}</h3>
                <div className='sellers'>
                    <img src={service.img} alt='' />
                    <span>{service.seller.name}</span>
                    <span>{`@${service.seller.name} `}</span>
                    <p>{"⭐".repeat(5)}</p>
                </div>
                <AboutThisGig />
                <div className='flex'>
                    <button onClick={handleClick} className='btnModal'>About the seller</button>
                    <div className='openModal'>
                        {
                            open ? <AboutSellerPage onClick={handleClick} /> : ''
                        }
                    </div>
                    <button className='btnModal'>Add to cart</button>
                    <button className='btnModal'>Add to order list</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;
