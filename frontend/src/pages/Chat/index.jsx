import React from "react";
import "./style.scss";

import Conversation from "./Conversation";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="wrapper">
      <div className="chat">
        <Conversation />
        <Messages />
      </div>
    </div>
  );
};

export default Chat;
