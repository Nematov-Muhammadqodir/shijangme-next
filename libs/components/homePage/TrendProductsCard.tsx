import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product } from "@/libs/types/product/product";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "@/apollo/store";

interface TrendProductsCardProps {
  product: Product;
  likeProductHandler: any;
}

const TrendProductsCard = (props: TrendProductsCardProps) => {
  const { product, likeProductHandler } = props;
  const user = useReactiveVar(userVar);
  return (
    <div>
      <Stack className="trend-products-card">
        <Stack className="trend-products-card-image">
          <img
            src="/img/products/pinapple.png"
            alt="trend-products-card-image"
          />
          <Box
            className="like"
            onClick={() => likeProductHandler(user, product._id)}
          >
            {product.meLiked && product.meLiked[0]?.myFavorite ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </Box>
          <Box className="product-left-count">
            <span>{product.productLeftCount} items left</span>
          </Box>
        </Stack>
        <Stack className="card-info">
          <Stack>
            <Box className="card-info-name">{product.productName}</Box>
            <Box className="card-info-desc">{product.productDesc}</Box>
          </Stack>

          <Box className="card-view">
            <RemoveRedEyeIcon />
            <span>{product.productViews}</span>
          </Box>
          <Stack className="product-price">
            <span>￦{product.productPrice}</span>
            <Button className="cart">
              <AddShoppingCartIcon />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default TrendProductsCard;
