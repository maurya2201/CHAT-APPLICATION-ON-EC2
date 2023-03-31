import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log(message);
  return (
    <div className={`message ${message?.senderId === currentUser.uid}`}>
      <div className="messageInfo">
        <img
          alt="chat"
          src={
            message?.senderId === currentUser?.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
        />

        {console.log(message?.senderId , currentUser)}

        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>{message?.text}</p>
        {message?.img && <img alt="chat" src={message?.img} />}
      </div>
    </div>
  );
};

export default Message;
