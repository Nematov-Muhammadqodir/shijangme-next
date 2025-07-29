import { Stack } from "@mui/material";
import Head from "next/head";
import Top from "../Top";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>ShijangMe</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: "#81c784" }}>
            <Top />
          </Stack>

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
