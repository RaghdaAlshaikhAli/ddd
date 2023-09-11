import React from 'react';
import man from '../../../assets/images/man.jpg'
import './style.scss';
import close from '../../../assets/images/cancel.png'
// import close from '../../../assets/images/close.png'

const AboutSellerPage = ({ onClick }) => {
    // Dummy data for seller
    const seller = {
        name: 'John Doe',
        img: man,
        rating: 4.8,
        reviews: 156,
        location: 'United States',
        about: 'I am an experienced web developer specializing in front-end development.',
    };

    return (
        <div className="about-seller-page">
            <h2>About the seller</h2>
            <img src={close} alt='' className='close' onClick={onClick} />

            <div className="seller-info">
                <img src={seller.img} alt='' />
                <h1 className="seller-name">{seller.name}</h1>
                <span className="seller-rating">{seller.rating}</span>
                <p>{"⭐".repeat(5)}</p>
            </div>
            <div className='infoApp'>
                <div className='info'>
                    <div>
                        <span>From</span>
                        <p>{'form'}</p>
                    </div>
                    <div>
                        <span>Member since</span>
                        <p>{'form'}</p>
                    </div>
                    <div>
                        <span>Avg. response time</span>
                        <p>{'form'}</p>
                    </div>
                    <div>
                        <span>Last delivery</span>
                        <p>{'form'}</p>
                    </div>
                    <div>
                        <span>Languages</span>
                        <p>{'form'}</p>
                    </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15g versions of Lorem Ipsum.
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
            </div>
        </div>
    );
};

export default AboutSellerPage;
