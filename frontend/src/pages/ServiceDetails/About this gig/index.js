import React from 'react';
import './style.scss';

const AboutThisGig = () => {
    // Dummy data for gig details
    const gigDetails = {
        serviceName: 'embroidery',
        description: 'I will create a responsive website for your business.',
    };

    return (
        <div className="about-this-gig">
            <h2>About This Gig</h2>
            <div>
                <p>{gigDetails.serviceName}</p>
                <p>{gigDetails.description}</p>
                <p>{gigDetails.description}</p>
                <p>{gigDetails.description}</p>
            </div>
        </div>
    );
};

export default AboutThisGig;
