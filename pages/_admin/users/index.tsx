import withLayoutAdmin from "@/libs/components/layout/AdminLayout";
import { Stack } from "@mui/material";
import React from "react";

const Users = () => {
  return (
    <div className="users-page">
      <Stack className="users-page-intro">
        <span className="page-name">Users Page</span>
        <span className="page-desc">View All Users</span>
      </Stack>
    </div>
  );
};

export default withLayoutAdmin(Users);
