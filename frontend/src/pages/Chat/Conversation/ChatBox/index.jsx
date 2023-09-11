import React from 'react'

const ChatBox = () => {
  return (
    <div className='box'>
        <div className="avatar"><img src="https://placehold.co/400x400" alt="" /></div>
        <div className="msg">
            <div className="username">John Joe</div>
            <div className="mini-msg">Lorem ipsum, dolor ...</div>
        </div>
    </div>
  )
}

export default ChatBox