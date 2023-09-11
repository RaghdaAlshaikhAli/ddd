import React from "react";
import SingleMSg from "./SingleMsg";

const Messages = () => {
  return (
    <div className="messages">
      <div className="message">
        <SingleMSg />
        <SingleMSg />
      </div>
      <form className="send-box">
        <input type="text" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Messages;
