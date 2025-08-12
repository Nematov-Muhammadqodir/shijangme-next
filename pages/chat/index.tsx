import ChatContainer from "@/libs/components/chat/ChatContainer";
import ChatNavbar from "@/libs/components/chat/ChatNavbar";
import ChatSidebar from "@/libs/components/chat/ChatSidebar";
import MessageInput from "@/libs/components/chat/MessageInput";
import MessageNavbar from "@/libs/components/chat/MessageNavbar";
import withLayoutChat from "@/libs/components/layout/ChatBasic";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Container, Stack } from "@mui/material";
import React from "react";

const ChatApp = () => {
  return (
    <div className="chatty-app">
      <Stack className="container">
        <Container className="chat-message-main-container">
          <div className="chat-message-container">
            <ChatSidebar />
            <div className="vertical-border"></div>
            <div className="message-bar-container">
              <MessageNavbar />
              <ChatContainer />
              <MessageInput />
            </div>
          </div>
        </Container>
      </Stack>
    </div>
  );
};
export default withLayoutChat(ChatApp);
