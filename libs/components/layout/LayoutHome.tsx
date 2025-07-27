import { Stack } from "@mui/material";
import Head from "next/head";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>ShijangMe</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: "#81c784" }}>Header Home</Stack>

          <Stack>
            <Component {...props} />
          </Stack>

          <Stack sx={{ background: "grey" }}>Footer</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;
