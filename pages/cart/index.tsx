import CartItem from "@/libs/components/cart/CartItem";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";

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
          <Stack className="right-config">
            <Stack className="top-config">
              <Stack className="row">
                <span className="key">2 items:</span>
                <span className="value">￦240 000</span>
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
                <span className="value">-￦50 000</span>
              </Stack>
            </Stack>
            <div className="divider"></div>
            <Stack className="total-price-container">
              <span className="desc">Total:</span>
              <span className="amount">￦240 000</span>
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
