import { Box, Stack } from "@mui/material";
import React from "react";

const Category = () => {
  return (
    <div className="category-main-container">
      <Stack className="container">
        <Stack className="categories">
          <Stack className="category-item">
            <Box className="category-img">
              <span>🥒</span>
            </Box>
            <span className="category-name">All</span>
          </Stack>
          <Stack className="category-item">
            <Box className="category-img">
              <span>🍆</span>
            </Box>
            <span className="category-name">Vegetables</span>
          </Stack>
          <Stack className="category-item">
            <Box className="category-img">
              <span>🍓</span>
            </Box>
            <span className="category-name">Fruits</span>
          </Stack>
          <Stack className="category-item">
            <Box className="category-img">
              <span>🥩</span>
            </Box>
            <span className="category-name">Meat & Eggs</span>
          </Stack>
          <Stack className="category-item">
            <Box className="category-img">
              <span>🍄‍🟫</span>
            </Box>
            <span className="category-name">Mushrooms</span>
          </Stack>
          <Stack className="category-item">
            <Box className="category-img">
              <span>🥛</span>
            </Box>
            <span className="category-name">Milk & Bevarages</span>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Category;
// 🍓🥩🥛🥛🍄‍🟫🧅🍆
