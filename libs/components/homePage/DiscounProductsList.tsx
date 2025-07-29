import { Stack } from "@mui/material";
import React from "react";
import DiscountProductCart from "./DiscountProductCart";

const DiscounProductsList = () => {
  const products = [1, 2, 3, 4, 5];
  return (
    <div className="discount-products-list-main-countainer">
      <Stack className="container">
        <Stack className="discount-products-list">
          <Stack>Discount Products</Stack>
          <Stack className="discount-card-main-container">
            {products.map((product, index) => {
              return <DiscountProductCart key={index} />;
            })}
          </Stack>
          <Stack>Pagination</Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default DiscounProductsList;
