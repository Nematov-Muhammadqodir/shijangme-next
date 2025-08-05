import { topProductRank } from "@/libs/types/config";
import { Product } from "@/libs/types/product/product";
import product from "@/pages/product";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

interface MyPageFavoriteCard {
  product: Product;
  likeProductHandler?: any;
  myFavorites?: boolean;
  recentlyVisited?: boolean;
}

const MyPageFavoriteCard = (props: MyPageFavoriteCard) => {
  const { product, likeProductHandler, myFavorites, recentlyVisited } = props;
  return (
    <Stack className="card-config">
      <Stack className="top">
        <Link
          href={{
            pathname: "/product/detail",
            query: { id: product?._id },
          }}
        >
          <img src={"/img/products/pinapple.png"} alt="" />
        </Link>
        {product && product?.productRank > topProductRank && (
          <Box component={"div"} className={"top-badge"}>
            <AutoAwesomeOutlinedIcon className="badge-img" />
            <Typography>TOP</Typography>
          </Box>
        )}
        <Box component={"div"} className={"price-box"}>
          <Typography>${product?.productPrice}</Typography>
          <Typography>{product?.productVolume}KG</Typography>
        </Box>
      </Stack>
      <Stack className="bottom">
        <Stack className="name-address">
          <Stack className="name">
            <Link
              href={{
                pathname: "/product/detail",
                query: { id: product?._id },
              }}
            >
              <Typography>{product.productName}</Typography>
            </Link>
          </Stack>
          <Stack className="address">
            <Typography>{product.productDesc}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MyPageFavoriteCard;
