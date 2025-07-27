import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import React from "react";

const Community: NextPage = () => {
  return (
    <Container>
      <Stack>Community Page</Stack>
    </Container>
  );
};

export default withLayoutMain(Community);
