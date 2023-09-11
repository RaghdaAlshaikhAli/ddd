import React from 'react'

const Rating = () => {
    return (
        <div className='rating'>
            <h3>Rating</h3>
            
            <p>4.1 average based on 254 reviews-{"⭐".repeat(5)}</p>
            <hr style={{ border: "3px solid #f1f1f1" }} />

            <div className="row">
                <div className="side">
                    <div>5 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                        <div className="bar-5"></div>
                    </div>
                </div>
                <div className="side right">
                    <div>150</div>
                </div>
                <div className="side">
                    <div>4 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                        <div className="bar-4"></div>
                    </div>
                </div>
                <div className="side right">
                    <div>63</div>
                </div>
                <div className="side">
                    <div>3 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                        <div className="bar-3"></div>
                    </div>
                </div>
                <div className="side right">
                    <div>15</div>
                </div>
                <div className="side">
                    <div>2 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                        <div className="bar-2"></div>
                    </div>
                </div>
                <div className="side right">
                    <div>6</div>
                </div>
                <div className="side">
                    <div>1 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                        <div className="bar-1"></div>
                    </div>
                </div>
                <div className="side right">
                    <div>20</div>
                </div>
            </div>
        </div>
    )
}

export default Rating