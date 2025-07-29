import { Box, Stack, Pagination, Fade } from "@mui/material"; // Import Pagination and Box
import React, { useState } from "react";
import DiscountProductCart from "./DiscountProductCart";

const DiscounProductsList = () => {
  const allProducts = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
    { id: 8, name: "Product 8" },
    { id: 9, name: "Product 9" },
    { id: 10, name: "Product 10" },
    { id: 11, name: "Product 11" },
    { id: 12, name: "Product 12" },
    // Add more products here to clearly see pagination in action
  ];

  const [page, setPage] = useState(1);

  const itemsPerPage = 4;

  // Calculate the total number of pages
  const pageCount = Math.ceil(allProducts.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = allProducts.slice(startIndex, endIndex);

  // Handle page change
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // Optional: Scroll to top of the list when page changes for better UX
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="discount-products-list-main-countainer">
      <Stack className="container">
        <Stack className="discount-products-list">
          <Stack className="discount-products-intro">
            <div className="horizontal-line"></div>
            <span>Discounted Products</span>
            <div className="horizontal-line"></div>
          </Stack>
          <Stack className="discount-card-main-container">
            {productsToDisplay.length === 0 ? (
              <Box
                component={"div"}
                className={"empty-list"}
                sx={{ gridColumn: "1 / -1" }}
              >
                No Discounted Products Available
              </Box>
            ) : (
              productsToDisplay.map((product) => (
                <Fade in={true} timeout={1000} key={product.id}>
                  <Box>
                    <DiscountProductCart />
                  </Box>
                </Fade>
              ))
            )}
          </Stack>

          {pageCount > 1 && (
            <Box
              sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}
            >
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

export default DiscounProductsList;
