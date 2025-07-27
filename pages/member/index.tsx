import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import React from "react";

const Members: NextPage = () => {
  return (
    <Container>
      <Stack>Members Page</Stack>
    </Container>
  );
};

export default withLayoutMain(Members);
