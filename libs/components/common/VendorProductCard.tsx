import React from "react";
import { Box, Button, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import { Product } from "@/libs/types/product/product";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "@/apollo/store";
import { REACT_APP_API_URL } from "@/libs/types/config";
import { useDispatch } from "react-redux";
import { addItem } from "@/slices/cartSlice";

interface VendorProductCardProps {
  product: Product;
  likeProductHandler: any;
}
const VendorProductCard = (props: VendorProductCardProps) => {
  const dispatch = useDispatch();
  const { product, likeProductHandler } = props;
  const user = useReactiveVar(userVar);
  const productImage = product?.productImages[0]
    ? `${REACT_APP_API_URL}/${product?.productImages[0]}`
    : "/img/products/mango.png";
  return (
    <div className="vendor-product-card">
      <Box className="product-img">
        <img src={productImage} alt="" />
      </Box>
      <Stack className="product-detail">
        <Stack className="view-like">
          <div className="view-box">
            <RemoveRedEyeIcon />
            <span>{product?.productViews}</span>
          </div>
          <Box
            className="like-box"
            onClick={() => likeProductHandler(user, product._id)}
          >
            {product.meLiked && product.meLiked[0]?.myFavorite ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </Box>
        </Stack>
        <div className="price-name">
          <span className="price">￦{product.productPrice}</span>
          <span className="product-name">{product.productName}</span>
        </div>
        <Button
          endIcon={<AddIcon />}
          className="add-btn"
          onClick={() =>
            dispatch(
              addItem({
                _id: product._id,
                quantity: 1,
                price: Number(product.productPrice),
                name: product.productName,
                image: productImage,
                discountRate: product.productDiscountRate,
              })
            )
          }
        >
          Add To Cart
        </Button>
      </Stack>
    </div>
  );
};

export default VendorProductCard;
