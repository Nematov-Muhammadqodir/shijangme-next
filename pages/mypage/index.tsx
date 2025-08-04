import withLayoutMain from "@/libs/components/layout/LayoutHome";
import MemberFollowers from "@/libs/components/member/MemberFollowers";
import MemberFollowings from "@/libs/components/member/MemberFollowings";
import AddProduct from "@/libs/components/mypage/AddProduct";
import MyArticles from "@/libs/components/mypage/MyArticles";
import MyFavorites from "@/libs/components/mypage/MyFavorites";
import MyMenu from "@/libs/components/mypage/MyMenu";
import MyProducts from "@/libs/components/mypage/MyProducts";
import MyProfile from "@/libs/components/mypage/MyProfile";
import RecentlyVisited from "@/libs/components/mypage/RecentlyVisited";
import WriteArticle from "@/libs/components/mypage/WriteArticle";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const MyPage: NextPage = () => {
  const router = useRouter();
  const category: any = router.query?.category ?? "myProfile";
  return (
    <div id="my-page" style={{ position: "relative" }}>
      <div className="container">
        <Stack className={"my-page"}>
          <Stack className={"back-frame"}>
            <Stack className={"left-config"}>
              <MyMenu />
            </Stack>
            <Stack className="main-config" mb={"76px"}>
              <Stack className={"list-config"}>
                {category === "addProduct" && <AddProduct />}
                {category === "myProducts" && <MyProducts />}
                {category === "myFavorites" && <MyFavorites />}
                {category === "recentlyVisited" && <RecentlyVisited />}
                {category === "myArticles" && <MyArticles />}
                {category === "writeArticle" && <WriteArticle />}
                {category === "myProfile" && <MyProfile />}
                {category === "followers" && <MemberFollowers />}
                {category === "followings" && <MemberFollowings />}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default withLayoutMain(MyPage);
