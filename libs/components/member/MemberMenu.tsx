import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import HomeIcon from "@mui/icons-material/Home";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

const MemberMenu = () => {
  const router = useRouter();
  const category: any = router.query?.category;
  //   const category: any = "products";
  const follow = true;
  const memberType = "VENDOR";
  return (
    <Stack width={"100%"} padding={"30px 24px"}>
      <Stack className={"profile"}>
        <Box component={"div"} className={"profile-img"}>
          <img src={"/img/profile/defaultImg.jpg"} alt={"member-photo"} />
        </Box>
        <Stack className={"user-info"}>
          <Typography className={"user-name"}>Natsuki Kawai</Typography>
          <Box component={"div"} className={"user-phone"}>
            <CallIcon />
            <Typography className={"p-number"}>01080940023</Typography>
          </Box>
          <Typography className={"view-list"}>AGENT</Typography>
        </Stack>
      </Stack>
      <Stack className="follow-button-box">
        <>
          <Button
            variant="outlined"
            sx={{ background: "#b9b9b9" }}
            // onClick={() =>
            //   unsubscribeHandler(member?._id, getMemberRefetch, memberId)
            // }
          >
            Unfollow
          </Button>
          {follow ?? <Typography>Following</Typography>}
        </>

        <Button
          variant="contained"
          sx={{ background: "#ff5d18", ":hover": { background: "#ff5d18" } }}
          //   onClick={() =>
          //     subscribeHandler(member?._id, getMemberRefetch, memberId)
          //   }
        >
          Follow
        </Button>
      </Stack>
      <Stack className={"sections"}>
        <Stack className={"section"}>
          <Typography className="title" variant={"h5"}>
            Details
          </Typography>
          <List className={"sub-section"}>
            {memberType === "VENDOR" && (
              <ListItem className={category === "products" ? "focus" : ""}>
                <Link
                  href={{
                    pathname: "/member",
                    query: { ...router.query, category: "products" },
                  }}
                  scroll={false}
                  style={{ width: "100%" }}
                >
                  <div className={"flex-box"}>
                    {category === "products" ? (
                      <img
                        className={"com-icon"}
                        src={"/img/icons/homeWhite.svg"}
                        alt={"com-icon"}
                      />
                    ) : (
                      <img
                        className={"com-icon"}
                        src={"/img/icons/home.svg"}
                        alt={"com-icon"}
                      />
                    )}
                    <Typography
                      className={"sub-title"}
                      variant={"subtitle1"}
                      component={"p"}
                    >
                      Products
                    </Typography>
                    <Typography className="count-title" variant="subtitle1">
                      4
                    </Typography>
                  </div>
                </Link>
              </ListItem>
            )}
            <ListItem className={category === "followers" ? "focus" : ""}>
              <Link
                href={{
                  pathname: "/member",
                  query: { ...router.query, category: "followers" },
                }}
                scroll={false}
                style={{ width: "100%" }}
              >
                <div className={"flex-box flex-box-mine-follower"}>
                  <GroupOutlinedIcon className="groupOutlinedIcon white" />
                  <Typography
                    className={"sub-title"}
                    variant={"subtitle1"}
                    component={"p"}
                  >
                    Followers
                  </Typography>
                  <Typography className="count-title" variant="subtitle1">
                    10
                  </Typography>
                </div>
              </Link>
            </ListItem>
            <ListItem className={category === "followings" ? "focus" : ""}>
              <Link
                href={{
                  pathname: "/member",
                  query: { ...router.query, category: "followings" },
                }}
                scroll={false}
                style={{ width: "100%" }}
              >
                <div className={"flex-box flex-box-mine-follower"}>
                  <GroupAddOutlinedIcon className="groupOutlinedIcon white" />
                  <Typography
                    className={"sub-title"}
                    variant={"subtitle1"}
                    component={"p"}
                  >
                    Followings
                  </Typography>
                  <Typography className="count-title" variant="subtitle1">
                    10
                  </Typography>
                </div>
              </Link>
            </ListItem>
          </List>
        </Stack>
        <Stack className={"section"} sx={{ marginTop: "10px" }}>
          <div>
            <Typography className="title" variant={"h5"}>
              Community
            </Typography>
            <List className={"sub-section"}>
              <ListItem className={category === "articles" ? "focus" : ""}>
                <Link
                  href={{
                    pathname: "/member",
                    query: { ...router.query, category: "articles" },
                  }}
                  scroll={false}
                  style={{ width: "100%" }}
                >
                  <div className={"flex-box"}>
                    {category === "articles" ? (
                      <img
                        className={"com-icon"}
                        src={"/img/icons/discoveryWhite.svg"}
                        alt={"com-icon"}
                      />
                    ) : (
                      <img
                        className={"com-icon"}
                        src={"/img/icons/discovery.svg"}
                        alt={"com-icon"}
                      />
                    )}

                    <Typography
                      className={"sub-title"}
                      variant={"subtitle1"}
                      component={"p"}
                    >
                      Articles
                    </Typography>
                    <Typography className="count-title" variant="subtitle1">
                      10
                    </Typography>
                  </div>
                </Link>
              </ListItem>
            </List>
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MemberMenu;
