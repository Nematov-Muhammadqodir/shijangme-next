import React from "react";
import { Box, Button, Stack } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { useRouter } from "next/router";

const LeftNavbar = () => {
  const router = useRouter();
  const currentPath = router.pathname; // gets current URL path

  const handleRouteChange = (route: string) => {
    router.push(`/_admin/${route}`);
  };

  return (
    <div className="left-navbar-main">
      <Stack className="admin-info-box">
        <Box className="admin-profile-img">
          <img src="/img/profile/defaultImg.jpg" alt="" />
        </Box>
        <Stack className="admin-info">
          <span className="name">Admin</span>
          <span className="phone">01080940023</span>
        </Stack>
      </Stack>

      <div className="divider"></div>

      <Stack className="menu-main-container">
        <span className="menu-title">Menu</span>
        <Stack className="menu-list">
          <Button
            className={
              currentPath === "/_admin/users" ? "users-btn-active" : "users-btn"
            }
            onClick={() => handleRouteChange("users")}
          >
            <GroupIcon className="icon" />
            <span className="text">Users</span>
          </Button>

          <Button
            className={
              currentPath === "/_admin/products"
                ? "users-btn-active"
                : "users-btn"
            }
            onClick={() => handleRouteChange("products")}
          >
            <LocalMallIcon className="icon" />
            <span className="text">Products</span>
          </Button>

          <Button
            className={
              currentPath === "/_admin/community"
                ? "users-btn-active"
                : "users-btn"
            }
            onClick={() => handleRouteChange("community")}
          >
            <SignLanguageIcon className="icon" />
            <span className="text">Community</span>
          </Button>

          <Button
            className={
              currentPath === "/_admin/cs" ? "users-btn-active" : "users-btn"
            }
            onClick={() => handleRouteChange("cs")}
          >
            <SupportAgentIcon className="icon" />
            <span className="text">Customer Service</span>
          </Button>
        </Stack>
      </Stack>

      <Stack className="logout-container">
        <Box className="logo-container">Logo will be here</Box>
        <Button className="logout-btn" endIcon={<MeetingRoomIcon />}>
          Logout
        </Button>
      </Stack>
    </div>
  );
};

export default LeftNavbar;
