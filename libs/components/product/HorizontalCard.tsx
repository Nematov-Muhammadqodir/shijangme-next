import { Button, Stack } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const HorizontalCard = () => {
  const like = true;
  return (
    <div className="horizontal-card-main">
      <Stack className="horizontal-card-layout">
        <Stack className="card-image-container">
          <img src="/img/products/pinapple.png" alt="" />
        </Stack>
        <Stack className="card-detail-container">
          <span className="product-description">
            Cadbury Bournville Rich Cocoa 70%
          </span>
          <span className="product-name">Dark Chocolate Bar</span>
          <div className="like-price-container">
            <span className="product-price">$120.00</span>
            <div className="like-btn-container">
              {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </div>
          </div>
          <Button
            className="add-to-card-btn"
            variant="contained"
            endIcon={<AddShoppingCartIcon />}
          >
            Add To Cart
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default HorizontalCard;
