import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const TrendProductsCard = () => {
  const [like, setLike] = useState(true);
  return (
    <div>
      <Stack className="trend-products-card">
        <Stack className="trend-products-card-image">
          <img src="" alt="trend-products-card-image" />
          <Box className="like">
            {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Box>
          <Box className="product-left-count">
            <span>3 items left</span>
          </Box>
        </Stack>
        <Stack className="card-info">
          <Box className="card-info-text">
            John Varvatos Star USA Contrast Stitch Jacket
          </Box>
          <Box className="card-view">
            <RemoveRedEyeIcon />
            <span>10</span>
          </Box>
          <Stack className="product-price">
            <span>$32.00</span>
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
