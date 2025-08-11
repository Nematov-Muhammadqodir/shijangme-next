import React, { useEffect, useState } from "react";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import { Button } from "@mui/material";

const ChatSidebar = () => {
  // const { getUsers, users, setSelectedUser, selectedUser } = useChatStore();
  // const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  // useEffect(() => {
  //   getUsers();
  // }, [getUsers]);
  // const filteredUsers = showOnlineOnly
  //   ? users.filter((user) => onlineUsers.includes(user._id))
  //   : users;

  const filteredUsers = [1, 2, 3, 4, 5, 6, 7];

  const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className="sidebar-main-container">
      <div className="sidebar-header">
        <ContactMailOutlinedIcon />
        <span>Contacts</span>
      </div>
      <div className="border"></div>
      <div className="contact-list-container">
        {filteredUsers.map((user, i) => {
          return (
            <Button
              className={`user-container-btn ${selectedUser ? "selected" : ""}`}
              // onClick={() => setSelectedUser(user)}
              key={i}
              sx={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              <img src={"/img/profile/defaultImg.jpg"} alt="" />
              <div className="user-info-container">
                <span style={{ fontWeight: "600", fontSize: "16px" }}>
                  Natsuki
                </span>
                <span style={{ fontStyle: "italic" }}>online</span>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ChatSidebar;
