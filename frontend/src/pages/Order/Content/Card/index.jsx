import React from 'react'

const Card = () => {
    return (
        <div className="card">
            <div className="img"><img src="https://placehold.co/500x500" alt="" /></div>
            <div className="description">
                <h2>Title of order</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed nisi sed nunc tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus</p>
                <div className="btns">
                    <button>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Card