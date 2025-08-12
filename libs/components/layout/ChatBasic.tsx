import { Stack } from "@mui/system";
import Head from "next/head";
import ChatNavbar from "../chat/ChatNavbar";

const withLayoutChat = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Shijangme Chat</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack>
            <ChatNavbar />
          </Stack>

          <Stack>
            <Component {...props} />
          </Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutChat;
