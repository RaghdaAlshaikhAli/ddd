import React from 'react'
import { Fav } from '../../../../assets/icons'

const Card = () => {
    return (
        <div className="card">
            <div className="card-img">
                <img src="https://placehold.co/200x200" alt="img" />
            </div>
            <div className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ad perferendis ipsum? Vitae minima praesentium deserunt debitis, quasi ut, unde nemo quibusdam nihil libero qui deleniti harum veniam adipisci sint!
            </div>
            <div className="card-fav">
                <div><Fav/></div> <div>Add To List</div>
            </div>

        </div>

    )
}

export default Card