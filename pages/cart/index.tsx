import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import { cartItemsValue } from "@/slices/cartSlice";
import CartItemCard from "@/libs/components/cart/CartItem";
import { useMutation } from "@apollo/client";
import { LIKE_TARGET_PRODUCT } from "@/apollo/user/mutation";
import { T } from "@/libs/types/common";
import { useSelector, useDispatch } from "react-redux";
import { Message } from "@/libs/enums/common.enum";
import {
  wishListDecrement,
  wishListIncrement,
  resetWishListAmount,
  wishListValue,
} from "@/slices/wishListSlice";
import {
  sweetMixinErrorAlert,
  sweetTopSmallSuccessAlert,
} from "@/libs/types/sweetAlert";
import { CartItem } from "@/libs/types/search";

const Cart = () => {
  const cartItems = useSelector(cartItemsValue);
  console.log("cartItemsValue", cartItems.length);
  const [hasMounted, setHasMounted] = useState(false);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((acc: number, cur: CartItem) => {
    return acc + cur.quantity;
  }, 0);
  const totalPrice = cartItems.reduce((acc: number, cur: CartItem) => {
    return acc + cur.quantity * cur.price;
  }, 0);

  const discountedPrice = cartItems.reduce((acc: number, cur: CartItem) => {
    console.log("currentItemInCart", cur);
    return (
      acc + cur.quantity * (cur.price - (cur.price / 100) * cur.discountRate)
    );
  }, 0);

  console.log("discountedPrice", discountedPrice);

  const earnedAmount = totalPrice - discountedPrice;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // Render a fallback or nothing on server and during hydration
    return <p>Loading...</p>; // or return null
  }
  return (
    <div className="main-cart-container" style={{ marginTop: "200px" }}>
      <Stack className="container">
        <Box className="cart-intro">
          <Typography variant="h2" className="main">
            Your Cart
          </Typography>
          <Typography className="products-amount">
            {cartItems.length} Products in Your cart
          </Typography>
        </Box>

        <Stack className="cart-layout-main">
          <Stack className="left-config">
            {cartItems.map((cartItem) => {
              return <CartItemCard key={cartItem._id} cartItem={cartItem} />;
            })}
          </Stack>
          <Stack className="right-config">
            <Stack className="top-config">
              <Stack className="row">
                <span className="key">{totalItems} items:</span>
                <span className="value">￦{totalPrice}</span>
              </Stack>
              <Stack className="row">
                <span className="key">Delivery cost:</span>
                <span className="value">Unavailable</span>
              </Stack>
              <Stack className="row">
                <span className="key">Tax:</span>
                <span className="value">0</span>
              </Stack>
              <Stack className="row">
                <span className="key">Discount:</span>
                <span className="value">-￦{earnedAmount}</span>
              </Stack>
            </Stack>
            <div className="divider"></div>
            <Stack className="total-price-container">
              <span className="desc">Total:</span>
              <span className="amount">￦{totalPrice - earnedAmount}</span>
            </Stack>
            <Button
              variant="contained"
              className="checkout-btn"
              endIcon={<CreditScoreOutlinedIcon />}
            >
              Checkout
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayoutMain(Cart);
