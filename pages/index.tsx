import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Stack } from "@mui/material";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <Stack sx={{ height: "600px", marginTop: "200px" }}>
      <Box className={"container"}>Popular Products</Box>
      <Box className={"container"}>TopProducts</Box>
      <Box className={"container"}>Discounted Products</Box>
    </Stack>
  );
};

export default withLayoutMain(Home);
