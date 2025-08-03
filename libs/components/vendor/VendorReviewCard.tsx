import { Box, Stack } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import React from "react";

const VendorReviewCard = () => {
  const like = true;
  return (
    <div className="vendor-review-card-main">
      <Stack className="review-card-layout">
        <Stack className="user-detail">
          <img src="/img/profile/defaultImg.jpg" alt="" />
          <Stack className="user-info">
            <span className="user-name">Natsuki Kawai</span>
            <span className="date">12 March 2022</span>
          </Stack>
        </Stack>
        <span className="review-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          libero eligendi ex non sunt alias vero numquam et necessitatibus. Qui
          maiores provident animi suscipit alias fuga nesciunt reiciendis
          voluptas culpa.
        </span>
        <Box>{like ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}</Box>
        <div className="divider"></div>
      </Stack>
    </div>
  );
};

export default VendorReviewCard;
