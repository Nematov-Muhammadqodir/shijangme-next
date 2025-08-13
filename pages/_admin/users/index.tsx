import TopNavigation from "@/libs/components/admin/TopNavigation";
import withLayoutAdmin from "@/libs/components/layout/AdminLayout";
import { MembersInquiry } from "@/libs/types/member/member.input";
import { Stack } from "@mui/material";
import React, { useState } from "react";

const Users = ({ initialInquiry, ...props }: any) => {
  const [membersInquiry, setMembersInquiry] =
    useState<MembersInquiry>(initialInquiry);
  return (
    <div className="users-page">
      <Stack className="users-page-intro">
        <span className="page-name">Users Page</span>
        <span className="page-desc">View All Users</span>
      </Stack>
      <TopNavigation initialInquiry={membersInquiry} type="users" />
    </div>
  );
};

Users.defaultProps = {
  initialInquiry: {
    page: 1,
    limit: 10,
    sort: "createdAt",
    search: {},
  },
};

export default withLayoutAdmin(Users);
