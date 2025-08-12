// @ts-nocheck
import ChatContainer from "@/libs/components/chat/ChatContainer";
import ChatNavbar from "@/libs/components/chat/ChatNavbar";
import ChatSidebar from "@/libs/components/chat/ChatSidebar";
import MessageInput from "@/libs/components/chat/MessageInput";
import MessageNavbar from "@/libs/components/chat/MessageNavbar";
import withLayoutChat from "@/libs/components/layout/ChatBasic";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { useAuthStore } from "@/store/useAuthStore";
import { Box, Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Loader from "lucide-react";
import RotateRightOutlinedIcon from "@mui/icons-material/RotateRightOutlined";
import { useRouter } from "next/router";

const ChatApp = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (authUser === null) {
      router.push("/chat/login");
    }
  }, [authUser, router]);

  console.log("authUser", authUser);

  if (!authUser && isCheckingAuth) {
    return (
      <Stack
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          Checking... <RotateRightOutlinedIcon />
        </Box>
      </Stack>
    );
  } else {
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
  }
};
export default withLayoutChat(ChatApp);
