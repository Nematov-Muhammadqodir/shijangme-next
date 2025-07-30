import Advertisement from "@/libs/components/homePage/Advertisement";
import Banner from "@/libs/components/homePage/Banner";
import Blogs from "@/libs/components/homePage/Blogs";
import Category from "@/libs/components/homePage/Category";
import DiscounProductsList from "@/libs/components/homePage/DiscounProductsList";
import NewProductsList from "@/libs/components/homePage/NewProductsList";
import TrendProductsList from "@/libs/components/homePage/TrendProductsList";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Stack } from "@mui/material";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <Stack className="home-page" sx={{ height: "600px", marginTop: "200px" }}>
      <Banner />
      <Category />
      <DiscounProductsList />
      <NewProductsList />
      <TrendProductsList />
      <Advertisement />
      <Blogs />
      <Box className={"container"}>Discounted Products</Box>
    </Stack>
  );
};

export default withLayoutMain(Home);
