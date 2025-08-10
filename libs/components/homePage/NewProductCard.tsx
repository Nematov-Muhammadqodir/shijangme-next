import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import AddIcon from "@mui/icons-material/Add";
import { Product } from "@/libs/types/product/product";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "@/apollo/store";

interface NewProductCardProps {
  product: Product;
  likeProductHandler: any;
}

const NewProductCard = (props: NewProductCardProps) => {
  const { product, likeProductHandler } = props;
  const [like, setLike] = useState(true);
  const user = useReactiveVar(userVar);
  return (
    <div>
      <Stack className="new-product-card">
        <Stack className="new-product-card-image">
          <img src="/img/products/pinapple.png" alt="product-image" />
          <Box
            className="like"
            onClick={() =>
              likeProductHandler(user, product._id, product.productLikes)
            }
          >
            {product.meLiked && product.meLiked[0]?.myFavorite ? (
              <ThumbUpIcon />
            ) : (
              <ThumbUpOffAltIcon />
            )}
          </Box>
          <Box className="new">
            <FiberNewIcon />
          </Box>
          <Stack className="product-volume">
            <Box>{product.productVolume} Kg</Box>
          </Stack>
        </Stack>
        <Stack className="card-info">
          <Box className="product-origin">
            <span>Origin: {product.productOrigin}</span>
          </Box>
          <Stack className="product-price">
            <span>￦{product.productPrice}</span>
            <Button className="add-btn">
              <AddIcon />
            </Button>
          </Stack>
          <div className="product-name-wrapper">
            <span className="product-name">{product.productName}</span>
            <span className="product-desc">{product.productDesc}</span>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default NewProductCard;
// height: 50%;
// position: relative;
// display: flex;
// justify-content: center;
// align-items: center;
