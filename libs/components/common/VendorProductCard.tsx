import React from "react";
import { Box, Button, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";

const VendorProductCard = () => {
  const like = true;
  return (
    <div className="vendor-product-card">
      <Box className="product-img">
        <img src="/img/products/pinapple.png" alt="" />
      </Box>
      <Stack className="product-detail">
        <Stack className="view-like">
          <div className="view-box">
            <RemoveRedEyeIcon />
            <span>10</span>
          </div>
          <Box className="like-box">
            {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Box>
        </Stack>
        <div className="price-name">
          <span className="price">$120.00</span>
          <span className="product-name">Banana</span>
        </div>
        <Button endIcon={<AddIcon />} className="add-btn">
          Add To Cart
        </Button>
      </Stack>
    </div>
  );
};

export default VendorProductCard;
