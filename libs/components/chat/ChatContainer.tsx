import { formatDate } from "@/libs/types/config";
import React, { useEffect, useRef } from "react";

const ChatContainer = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);
  const messages = [true, false, true, false, true];

  return (
    <div className="chat-main-container" ref={scrollableContainerRef}>
      {messages.map((message: any, i) => (
        <div className={`message-item ${message ? "end" : "start"}`} key={i}>
          <img src={"/img/profile/defaultImg.jpg"} alt="" />
          <div className="message-item-text">
            <span>03.01.2002</span>
            <div className="text-container">
              <span>Hello</span>
            </div>
          </div>
        </div>
      ))}
      {/* Optional: you can keep a dummy div to scroll to */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatContainer;
