import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product } from "@/libs/types/product/product";
import { REACT_APP_API_URL } from "@/libs/types/config";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "@/apollo/store";

interface DiscountProductCartProps {
  product: Product;
  likeProductHandler: any;
}
const DiscountProductCart = (props: DiscountProductCartProps) => {
  const { product, likeProductHandler } = props;
  const [like, setLike] = useState(true);
  const user = useReactiveVar(userVar);
  const discountPrice =
    Number(product.productPrice) -
    (Number(product.productPrice) / 100) * product.productDiscountRate;
  const imgPath = `${REACT_APP_API_URL}/${product?.productImages[0]}`;
  return (
    <div>
      <Stack className="discount-card">
        <Box className="card-image">
          <img src={"/img/products/pinapple.png"} alt="product-image" />
          <Stack className="card-features">
            <Box className="discount">{product.productDiscountRate}%</Box>
            <Box
              className="like"
              onClick={() => likeProductHandler(user, product._id)}
            >
              {product.meLiked && product.meLiked[0]?.myFavorite ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}
            </Box>
          </Stack>
        </Box>
        <Stack className="card-info">
          <span className="product-name">{product.productName}</span>
          <span className="product-desc">{product.productDesc}</span>
          <Stack className="product-price">
            <span className="discount-price">￦{discountPrice.toFixed(0)}</span>
            <span className="original-price">{product.productPrice}</span>
            <span className="discount-amount">
              <span>-{product.productDiscountRate}%</span>
            </span>
          </Stack>
          <Box className="product-weight">
            <span>{product.productVolume} kg</span>
          </Box>
          <Button className="add-to-cart-btn" variant="contained">
            <AddShoppingCartIcon />
            <span>Add To Cart</span>
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default DiscountProductCart;
