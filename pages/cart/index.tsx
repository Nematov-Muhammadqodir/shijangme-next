import CartItem from "@/libs/components/cart/CartItem";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Cart = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="main-cart-container" style={{ marginTop: "200px" }}>
      <Stack className="container">
        <Box className="cart-intro">
          <Typography variant="h2" className="main">
            Your Cart
          </Typography>
          <Typography className="products-amount">
            5 Products in Your cart
          </Typography>
        </Box>

        <Stack className="cart-layout-main">
          <Stack className="left-config">
            {products.map((product) => {
              return <CartItem />;
            })}
          </Stack>
          <Stack className="right-config"></Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayoutMain(Cart);
