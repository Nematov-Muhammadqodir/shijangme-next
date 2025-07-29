import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const DiscountProductCart = () => {
  const [like, setLike] = useState(true);
  return (
    <div>
      <Stack className="discount-card">
        <Box className="card-image">
          <img src="" alt="product-image" />
          <Stack className="card-features">
            <Box className="discount">15%</Box>
            <Box className="like">
              {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Box>
          </Stack>
        </Box>
        <Stack className="card-info">
          <span className="product-name">
            cabbage Organic Trimmed Greens leaf Organic Vegetable..
          </span>
          <Stack className="product-price">
            <span className="discount-price">$120.00</span>
            <span className="original-price">$150.00</span>
            <span className="discount-amount">
              <span>-15%</span>
            </span>
          </Stack>
          <Box className="product-weight">
            <span>500gm</span>
          </Box>
          <Button className="add-to-cart-btn" variant="contained">
            <AddShoppingCartIcon />
            <span>Add To Cart</span>
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default DiscountProductCart;
