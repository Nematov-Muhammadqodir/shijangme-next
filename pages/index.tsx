import Banner from "@/libs/components/homePage/Banner";
import Category from "@/libs/components/homePage/Category";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Stack } from "@mui/material";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <Stack className="home-page" sx={{ height: "600px", marginTop: "200px" }}>
      <Banner />
      <Category />
      <Box className={"container"}>TopProducts</Box>
      <Box className={"container"}>Discounted Products</Box>
    </Stack>
  );
};

export default withLayoutMain(Home);
