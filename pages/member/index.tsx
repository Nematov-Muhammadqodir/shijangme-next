import withLayoutMain from "@/libs/components/layout/LayoutHome";
import MemberArticles from "@/libs/components/member/MemberArticles";
import MemberFollowers from "@/libs/components/member/MemberFollowers";
import MemberFollowings from "@/libs/components/member/MemberFollowings";
import MemberMenu from "@/libs/components/member/MemberMenu";
import MemberProducts from "@/libs/components/member/MemberProducts";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const Members: NextPage = () => {
  const router = useRouter();
  const category: any = router.query?.category;
  return (
    <div id="member-page" style={{ position: "relative", marginTop: "100px" }}>
      <div className="container">
        <Stack className={"member-page"}>
          <Stack className={"back-frame"}>
            <Stack className={"left-config"}>
              <MemberMenu />
            </Stack>
            <Stack className="main-config" mb={"76px"}>
              <Stack className={"list-config"}>
                {category === "products" && <MemberProducts />}
                {category === "followers" && <MemberFollowers />}
                {category === "followings" && <MemberFollowings />}
                {category === "articles" && <MemberArticles />}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default withLayoutMain(Members);
