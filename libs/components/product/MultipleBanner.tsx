import { Stack } from "@mui/material";
import React from "react";

const MultipleBanner = () => {
  return (
    <div className="multiple-banner-main" style={{ marginBottom: "150px" }}>
      <Stack className="multiple-banner">
        <Stack className="left">
          <img src="img/products/greens.jpg" alt="" />
          <span className="main-text">
            Shop the Complete <br /> Collection
          </span>
          <span className="secondary-text">
            Best Deals, New Arrivals, and Everyday Essentials
          </span>
          <img
            src="img/products/organic.svg"
            alt=""
            className="organic-image"
          />
        </Stack>
        <Stack className="right">
          <div className="top left">
            <img src="img/products/fruits-collection.jpg" alt="" />
          </div>
          <Stack className="bottom">
            <div className="left">
              <img src="img/products/meat.jpg" alt="" />
            </div>
            <div className="right left">
              <img src="img/products/eggs.jpg" alt="" />
            </div>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default MultipleBanner;
