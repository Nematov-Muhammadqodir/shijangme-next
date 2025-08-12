// @ts-nocheck
import React, { useEffect } from "react";
import { Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store/useAuthStore";

const ChatNavbar = () => {
  const router = useRouter();
  const handleHomeClick = () => {
    router.push("/");
  };

  const handleProfilePage = () => {
    router.push("/chat/profile");
  };

  return (
    <div className="chat-navbar-main-container">
      <div className="chat-navbar-container">
        <div className="chat-logo-container" onClick={handleHomeClick}>
          <SendIcon />
          <span>Chatty</span>
        </div>
        <div className="chat-settings-container">
          <Button variant="outlined">
            <SettingsIcon />
            <span>Settings</span>
          </Button>
          <Button variant="outlined" onClick={handleProfilePage}>
            <AdminPanelSettingsIcon />
            <span>Profile</span>
          </Button>
          <Button>
            <LogoutIcon />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatNavbar;
