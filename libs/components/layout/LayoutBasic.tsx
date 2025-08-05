import { Stack } from "@mui/material";
import Head from "next/head";
import Top from "../Top";
import Footer from "../Footer";
import SmalTop from "./SmalTop";

const withLayoutBasic = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>ShijangMe</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack>
            <SmalTop />
          </Stack>

          <Stack>
            <Component {...props} />
          </Stack>

          <Stack>
            <Footer />
          </Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutBasic;
