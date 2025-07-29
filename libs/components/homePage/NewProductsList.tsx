import { Box, Fade, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import NewProductCard from "./NewProductCard";

const NewProductsList = () => {
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
    <div className="new-products-list-main-container">
      <Stack className="container">
        <Stack className="new-products-list">
          <Stack className="new-products-intro">
            <div className="horizontal-line"></div>
            <span>NewProducts</span>
            <div className="horizontal-line"></div>
          </Stack>
          <Stack className="new-product-card-main-container">
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
                    <NewProductCard />
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

export default NewProductsList;
