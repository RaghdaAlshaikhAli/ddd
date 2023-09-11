import React from 'react'
import PersonalInformation from '../PersonalInformation';

const Avatar = () => {
  return (
    <div className="avatar">
      <div>
        <div className="group">
          <div className="images"><img src="https://placehold.co/400x400" alt="img" /></div>
          <div className="status"></div>
        </div>
        <div className="text">
          <div className="name">John Joe</div>
          <div className="surname">FrontEnd developer</div>
          <div className="reviews">{"⭐".repeat(5)}</div>
        </div>
      </div>
      <div className="btns">
        <button >Contact Me</button>
        <button>Get A Quotes</button>
      </div>
      <PersonalInformation />
    </div>
  )
}

export default Avatar