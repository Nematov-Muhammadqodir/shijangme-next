import withLayoutMain from "@/libs/components/layout/LayoutHome";
import MemberMenu from "@/libs/components/member/MemberMenu";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import React from "react";

const Members: NextPage = () => {
  return (
    <div id="member-page" style={{ position: "relative" }}>
      <div className="container">
        <Stack className={"member-page"}>
          <Stack className={"back-frame"}>
            <Stack className={"left-config"}>
              <MemberMenu />
            </Stack>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default withLayoutMain(Members);
