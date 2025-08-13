import { Stack } from "@mui/material";
import Head from "next/head";
import React from "react";
import LeftNavbar from "../admin/LeftNavbar";

const withLayoutAdmin = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>ShijangMe AdminPage</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack className="container">
            <Stack className="left-navbar-container">
              <LeftNavbar />
            </Stack>
            <Stack className="right-content-container">
              <Component {...props} />
            </Stack>
          </Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutAdmin;
