import { userVar } from "@/apollo/store";
import Advertisement from "@/libs/components/homePage/Advertisement";
import Banner from "@/libs/components/homePage/Banner";
import Blogs from "@/libs/components/homePage/Blogs";
import Category from "@/libs/components/homePage/Category";
import DiscounProductsList from "@/libs/components/homePage/DiscounProductsList";
import NewProductsList from "@/libs/components/homePage/NewProductsList";
import TrendProductsList from "@/libs/components/homePage/TrendProductsList";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { useReactiveVar } from "@apollo/client";
import { Box, Stack } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Home: NextPage = () => {
  const user = useReactiveVar(userVar);
  const router = useRouter();

  useEffect(() => {
    console.log("userTypeHome", user?.memberType);
    if (user.memberType === "ADMIN") {
      router.push("/_admin/users");
    }
  }, [user]);
  return (
    <Stack className="home-page" sx={{ height: "600px", marginTop: "200px" }}>
      <Banner />
      <Category />
      <DiscounProductsList />
      <NewProductsList />
      <TrendProductsList />
      <Advertisement />
      <Blogs />
    </Stack>
  );
};

export default withLayoutMain(Home);
