import { Box, Stack } from "@mui/material";
import React from "react";

const BlogsCard = () => {
  return (
    <div className="blog-card-main-container">
      <Stack className="blog-card">
        <Stack className="blog-img-container">
          <img src="" alt="blog-image" />
        </Stack>
        <Stack className="blog-info-container">
          <Stack className="blog-intro">
            <Box className="blog-type">HUMOUR</Box>
            <span className="date">15, November 2024</span>
          </Stack>
          <p className="blog-title">
            Savor the Purity, Taste the Difference Rooted in Nature Raised 
          </p>
          <div className="divider"></div>
          <p className="blog-content">
            Suspendisse blandit tempor dui sit amet egestas. Nam pretium urna
            mi, eu imperdiet mauris facilisis eu. Suspendisse blandit tempor dui
            sit amet egestas. Nam pretium urna mi, eu imperdiet mauris facilisis
            eu. mi, eu imperdiet mauris facilisis eu. Suspendisse blandit tempor
            dui sit amet egestas. Nam pretium urna mi, eu imperdiet mauris
            facilisis eu.
          </p>
        </Stack>
      </Stack>
    </div>
  );
};

export default BlogsCard;
