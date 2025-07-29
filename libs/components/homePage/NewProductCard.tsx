import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import AddIcon from "@mui/icons-material/Add";

const NewProductCard = () => {
  const [like, setLike] = useState(true);
  return (
    <div>
      <Stack className="new-product-card">
        <Stack className="new-product-card-image">
          <img src="" alt="product-image" />
          <Box className="like">
            {like ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
          </Box>
          <Box className="new">
            <FiberNewIcon />
          </Box>
          <Stack className="product-volume">
            <Box>220gm</Box>
          </Stack>
        </Stack>
        <Stack className="card-info">
          <Box className="product-origin">
            <span>Origin: KOREA</span>
          </Box>
          <Stack className="product-price">
            <span>$120.00</span>
            <Button className="add-btn">
              <AddIcon />
            </Button>
          </Stack>
          <span className="product-name">
            B Natural Mango Juice, Goodness of fiber, 1 litre (Pack of 2)
          </span>
        </Stack>
      </Stack>
    </div>
  );
};

export default NewProductCard;
