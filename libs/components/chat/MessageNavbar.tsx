import React from "react";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";

const MessageNavbar = () => {
  const selectedUser = true;
  if (!selectedUser) return <div>User not selected...</div>;
  return (
    <div className="chosen-user-main-header">
      <div className="chosen">
        <img src={"/img/profile/defaultImg.jpg"} alt="" />
        <div className="user-status">
          <span style={{ fontWeight: "600", fontSize: "16px" }}>Natsuki</span>
          <span style={{ fontStyle: "italic" }}>
            {selectedUser ? "online" : "offline"}
          </span>
        </div>
      </div>
      <div>
        <CancelScheduleSendIcon />
      </div>
    </div>
  );
};

export default MessageNavbar;
