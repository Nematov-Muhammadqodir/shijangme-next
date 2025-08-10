import { Box, Button, Stack } from "@mui/material";
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import type { RootState } from "../../../store.ts";
import { useSelector, useDispatch } from "react-redux";

const CartItem = () => {
  const dispatch = useDispatch();
  const like = true;
  return (
    <div className="cart-item-main">
      <Box className="cart-item-left-config">
        <Box className="cart-image-container">
          <img src="/img/products/pinapple.png" alt="" />
        </Box>
        <Stack className="product-detail-container">
          <span className="name">Qalampir</span>
          <span className="secondary">Volume: 2KG</span>
          <span className="secondary">Discount: 10%</span>
          <span className="secondary">Price: 120000 W - Total: 240000</span>
        </Stack>
      </Box>
      <Box className="cart-item-right-config">
        <Stack className="like-delete-container">
          <Button className="like-container">
            {like ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          </Button>
          <Button className="delete-btn">
            <ClearOutlinedIcon />
          </Button>
        </Stack>
        <Stack className="qty-container">
          <div className="qty-amount">Qty: 2</div>
          <Button className="plus">
            <AddOutlinedIcon />
          </Button>
          <Button className="minus">
            <RemoveOutlinedIcon />
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default CartItem;
