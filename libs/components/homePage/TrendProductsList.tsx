import { Box, Fade, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import TrendProductsCard from "./TrendProductsCard";

const TrendProductsList = () => {
  const allProducts = [1, 2, 3, 4, 5, 6];

  const [page, setPage] = useState(1);

  const itemsPerPage = 4;

  const pageCount = Math.ceil(allProducts.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = allProducts.slice(startIndex, endIndex);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // Optional: Scroll to top of the list when page changes for better UX
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="trend-products-list-main-container">
      <Stack className="container">
        <Stack className="trend-products-list">
          <Stack className="trend-products-intro">
            <div className="horizontal-line"></div>
            <span>Trend Products</span>
            <div className="horizontal-line"></div>
          </Stack>
          <Stack
            className={`new-product-card-main-container ${
              productsToDisplay.length < 4 ? "flex-left" : ""
            }`}
          >
            {productsToDisplay.length === 0 ? (
              <Box
                component={"div"}
                className={"empty-list"}
                sx={{ gridColumn: "1 / -1" }}
              >
                No Discounted Products Available
              </Box>
            ) : (
              productsToDisplay.map((product, key) => (
                <Fade in={true} timeout={1000} key={key}>
                  <Box>
                    <TrendProductsCard />
                  </Box>
                </Fade>
              ))
            )}
          </Stack>
          {pageCount > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={handleChange}
                color="primary"
                size="large"
                showFirstButton
                showLastButton
              />
            </Box>
          )}
        </Stack>
      </Stack>
    </div>
  );
};

export default TrendProductsList;
