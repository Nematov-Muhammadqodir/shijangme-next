import { Box, Button, Stack } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductCard = () => {
  return (
    <div className="product-card-container">
      <Stack className="product-card">
        <Box className="image-container">
          <img src="/img/products/banana.png" alt="" />
        </Box>
        <Stack className="product-info-container">
          <span className="product-name">
            Borges Super blend of Extra virgin Olive oil & Sunflower oil
          </span>
          <span className="product-price">$120.00</span>
          <Button className="add-btn" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default ProductCard;
