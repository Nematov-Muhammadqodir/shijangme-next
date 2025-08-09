import { Badge, Box, Button, Link, Menu, MenuItem, Stack } from "@mui/material";
import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import React from "react";
import { Logout } from "@mui/icons-material";
import StoreIcon from "@mui/icons-material/Store";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useQuery, useReactiveVar } from "@apollo/client";
import { userVar } from "@/apollo/store";
import { getJwtToken, logOut, updateUserInfo } from "../auth";
import { Product } from "../types/product/product";
import { GET_FAVORITES } from "@/apollo/user/query";
import { T } from "../types/common";

const Navbar = () => {
  const user = useReactiveVar(userVar);
  console.log("top-user", user);
  const [myFavorites, setMyFavorites] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [searchFavorites, setSearchFavorites] = useState<T>({
    page: 1,
    limit: 6,
  });

  const [logoutAnchor, setLogoutAnchor] = React.useState<null | HTMLElement>(
    null
  );
  const [colorChange, setColorChange] = useState(false);
  const [languageAnchor, setLanguageAnchor] =
    React.useState<null | HTMLElement>(null);
  const langOpen = Boolean(languageAnchor);
  const logoutOpen = Boolean(logoutAnchor);
  const router = useRouter();

  const handleMyPage = async () => {
    await router.push(`${router.query.referrer ?? "/mypage"}`);
  };

  const handleWishList = async () => {
    await router.push({ pathname: "/mypage", query: "category=myFavorites" });
  };
  const handleCart = async () => {
    await router.push({ pathname: "cart" });
  };

  const {
    loading: loadingFavorites,
    error: errorFavorites,
    data: dataFavorites,
    refetch: refetchFavorites,
  } = useQuery(GET_FAVORITES, {
    fetchPolicy: "network-only",
    variables: {
      input: {
        page: searchFavorites.page,
        limit: searchFavorites.limit,
      },
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      if (data?.getFavorites) {
        setMyFavorites(data.getFavorites.list);
        setTotal(data.getFavorites.metaCounter[0].total);
      }
    },
  });

  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 150) {
  //     setColorChange(true);
  //   } else {
  //     setColorChange(false);
  //   }
  // };

  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", changeNavbarColor);
  // }
  useEffect(() => {
    const jwt = getJwtToken();
    if (jwt) updateUserInfo(jwt);
  }, []);
  return (
    <Stack className={`navbar-main ${colorChange ? "transparent" : ""}`}>
      <Stack className="container">
        <Stack className="top-navbar">
          <Box className="logo-box">
            <Link href={"/"}>
              {/* <img src="/img/logo/logoWhite.svg" alt="" /> */}
              Logo will be here
            </Link>
          </Box>
          <Box className="router-box">
            <Link href={"/"}>
              <div>Home</div>
            </Link>
            <Link href={"/product"}>
              <div>Products</div>
            </Link>
            <Link href={"/vendor"}>
              <div>Vendors</div>
            </Link>
            <Link href={"/community?articleCategory=FREE"}>
              <div>Community</div>
            </Link>
            {user?._id && (
              <Link href={"/mypage"}>
                <div> My Page </div>
              </Link>
            )}
            <Link href={"/cs"}>
              <div>CS</div>
            </Link>
          </Box>
          <Box>
            <Stack className="get-in-touch">
              <Box className="calling-logo">
                <PhoneInTalkIcon />
              </Box>
              <Stack className="phone-number">
                <span>Get In Touch</span>
                <span>+58 6548 2365</span>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <div className="divider"></div>

        <Stack className="bottom-navbar">
          <Stack className="select-lang-container">
            <Button
              id="basic-button"
              aria-controls={langOpen ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={langOpen ? "true" : undefined}
              onClick={(event: any) => setLanguageAnchor(event.currentTarget)}
              variant="contained"
              endIcon={<LanguageIcon />}
            >
              English
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={languageAnchor}
              open={langOpen}
              onClose={() => {
                setLanguageAnchor(null);
              }}
            >
              <MenuItem>English</MenuItem>
              <MenuItem>Korean</MenuItem>
              <MenuItem>Uzbek</MenuItem>
            </Menu>
            {user?._id && (
              <Badge badgeContent={4} color="primary">
                <NotificationsOutlinedIcon className={"notification-icon"} />
              </Badge>
            )}
          </Stack>
          <Stack className="bottom-navbar-info">
            <Box className="about-us">
              <Link href={"/about-us"}>
                <div>
                  <StoreIcon />
                  <div>About Us</div>
                </div>
              </Link>
            </Box>

            {user?._id && (
              <Box className="wish-list" onClick={handleWishList}>
                <Badge badgeContent={total} color="primary">
                  <FavoriteBorderIcon />
                </Badge>
                <span>Wish List</span>
              </Box>
            )}

            {user?._id && (
              <Box className="cart" onClick={handleCart}>
                <Badge badgeContent={4} color="primary">
                  <AddShoppingCartIcon />
                </Badge>
                <span>Cart</span>
              </Box>
            )}

            {user?._id ? (
              <>
                <div
                  className={"login-user"}
                  onClick={(event: any) => setLogoutAnchor(event.currentTarget)}
                >
                  <img
                    className="navbar-profile-image"
                    src={"/img/profile/defaultImg.jpg"}
                    alt=""
                  />
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={logoutAnchor}
                  open={logoutOpen}
                  onClose={() => {
                    setLogoutAnchor(null);
                  }}
                >
                  <MenuItem onClick={() => handleMyPage()}>My Page</MenuItem>
                  <MenuItem onClick={() => logOut()}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Link href={"/account/join"}>
                <div className={"join-box"}>
                  <AccountCircleOutlinedIcon />
                  <span>Sign In</span>
                </div>
              </Link>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default withRouter(Navbar);
