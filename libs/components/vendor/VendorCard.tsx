import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box } from "@mui/material";
import Link from "next/link";

const VendorCard = () => {
  const like = true;
  return (
    <div className="vendor-card-main">
      <div className="vendor-card">
        <Link
          href={{
            pathname: "/agent/detail",
            query: { agentId: "jghbuhku" },
          }}
        >
          <Box className="vendor-img-container" component={"div"}>
            <img src="/img/profile/defaultImg.jpg" alt="" />
            <div className="vendor-product-count">4 products</div>
          </Box>
        </Link>

        <div className="vendor-info-container">
          <Link
            href={{
              pathname: "/agent/detail",
              query: { agentId: "jghbuhku" },
            }}
          >
            <span className="vendor-name">Kevin Nematov</span>
          </Link>

          <span className="broker-of">
            Broker of: <span className="section">Meats</span>
          </span>
          <div className="view-like-container">
            <div className="like">
              {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </div>
            <div className="view">
              <RemoveRedEyeIcon />
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
