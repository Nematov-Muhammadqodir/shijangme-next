import { Button, Stack } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import BlogsCard from "./BlogsCard";

const Blogs = () => {
  const blogs = [1, 2, 3];
  return (
    <div className="blogs-main-container">
      <Stack className="container">
        <Stack className="blogs-intro">
          <h2>News & Articles</h2>
        </Stack>
        <Stack className="blog-cards-list-container">
          {blogs.map((blog, i) => {
            return <BlogsCard key={i} />;
          })}
        </Stack>

        <Stack className="btn-container">
          <Button
            endIcon={<KeyboardDoubleArrowRightIcon />}
            variant="contained"
          >
            View All Blogs
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default Blogs;
