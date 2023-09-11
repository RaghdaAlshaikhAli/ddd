import React from 'react'
import ChatBox from './ChatBox'

const Conversation = () => {
    return (
        <div className="allConversations">
            <div className="top">All Conversations</div>
            <div className="chat-boxes">
                <ChatBox/>
                <ChatBox/>
                <ChatBox/>
                <ChatBox/>
                <ChatBox/>
                <ChatBox/>
            </div>
        </div>
    )
}

export default Conversation