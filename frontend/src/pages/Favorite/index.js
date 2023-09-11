import React from 'react';
import FavComponent from './card';
import './style.scss';

const FavoritePage = () => {
    return (
        <div className='FavoritePage'>
            <h3>Favorite service</h3>
            <div className='grid'>
                <FavComponent />
                <FavComponent />
                <FavComponent />
                <FavComponent />
                <FavComponent />
                <FavComponent />
            </div>
        </div>
    );
};

export default FavoritePage;
