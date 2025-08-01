import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Review from "@/libs/components/product/Review";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { CommentGroup } from "@/libs/enums/comment.enum";
import { CommentInput } from "@/libs/types/comment/comment.input";
import SendIcon from "@mui/icons-material/Send";

const ProductDetail = () => {
  const [like, setLike] = useState(true);
  const [insertCommentData, setInsertCommentData] = useState<CommentInput>({
    commentGroup: CommentGroup.PRODUCT,
    commentContent: "",
    commentRefId: "",
  });
  const user = {
    _id: "id_will_be_here",
  };
  const subImages = [1, 2, 3, 4];
  const productComments = [1, 2, 3, 4];

  /** APOLLO REQUESTS **/
  //   const [likeTargetProduct] = useMutation(LIKE_TARGET_PRODUCT);
  //   const [createComment] = useMutation(CREATE_COMMENT);

  const createCommentHandler = async () => {
    try {
      //   if (!propertyId) return;
      //   if (!user._id) throw new Error(Message.NOT_AUTHENTICATED);
      // execute likeTargetProduct Mutation
      //   await createComment({
      //     variables: {
      //       input: insertCommentData,
      //     },
      //   });
      //   setInsertCommentData({ ...insertCommentData, commentContent: "" });
      //   await getCommentsRefetch({ input: commentInquiry });
      //   await sweetTopSmallSuccessAlert("success", 800);
    } catch (err: any) {
      console.log("Error, createCommentHandler", err);
      //   await sweetMixinErrorAlert(err.message).then();
    }
  };
  return (
    <div
      className="product-detail-main-container"
      style={{ marginTop: "200px" }}
    >
      <Stack className="container">
        <Stack className="product-detail-config">
          <Stack className="product-detail-intro">
            <Stack className="product-name">
              <Stack className="product-main-details">
                <span className="name">Awesome Interior Property</span>
                <Stack className="product-type">
                  <span>SEOUL</span>
                  <span>FRUITS</span>
                </Stack>
              </Stack>
              <Stack className="product-ratings">
                <Box className="view">
                  <RemoveRedEyeIcon />
                  <span>3</span>
                </Box>
                <Box className="like">
                  {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}

                  <span>3</span>
                </Box>
              </Stack>
            </Stack>
            <div className="divider"></div>
            <Stack className="bottom-details">
              <Stack className="detail">
                <span className="discount">
                  <span className="bold">Discount:</span> 5%
                </span>
                <span className="left-count">
                  <span className="bold">Left Count:</span> 120
                </span>
                <span className="volume">
                  <span className="bold">Volume:</span> 2
                </span>
              </Stack>
              <Box className="price-container">
                <span className="price">120.00$</span>
              </Box>
            </Stack>
          </Stack>
          <Stack className="product-images">
            <Stack className="product-main-image-container">
              <div className="description-container">
                <span className="description">
                  One Of the Best friuits for your well being in an affordable
                  price
                </span>
                <Button
                  className="description-btn"
                  endIcon={<KeyboardDoubleArrowRightIcon />}
                >
                  Add To Cart
                </Button>
              </div>

              <div className="image">
                <img
                  className="product-image"
                  src="/img/products/pinapple.png"
                  alt="product-main-image"
                />
                <div className="tag">
                  <img src="/img/products/detail-star.svg" alt="" />
                  <span className="tag-price">120.00$</span>
                </div>
              </div>
            </Stack>
            <Stack className="product-sub-image-container">
              {subImages.map((subImage) => {
                return (
                  <div className="sub-img-box">
                    <img src="/img/products/pinapple.png" alt="" />
                  </div>
                );
              })}
            </Stack>
          </Stack>
          <Stack className="reviews-main-container">
            <Stack className="filter-box">
              <RateReviewIcon />
              <span>3 Reviews</span>
            </Stack>
            <Stack className="review-list">
              {productComments?.map((comment, index) => {
                return <Review key={index} />;
              })}
            </Stack>
          </Stack>

          <Stack className="leave-review-section-main">
            <Typography className="main-title">Leave a Review</Typography>
            <Typography className="review-title">Review</Typography>
            <textarea
              onChange={({ target: { value } }: any) => {
                setInsertCommentData({
                  ...insertCommentData,
                  commentContent: value,
                });
              }}
              value={insertCommentData.commentContent}
              placeholder="Write a Review"
            ></textarea>
            <Button
              className="submit-review-btn"
              endIcon={<SendIcon />}
              disabled={
                insertCommentData.commentContent === "" || user?._id === ""
              }
              onClick={createCommentHandler}
            >
              Submit Review
            </Button>
          </Stack>

          <Stack className="product-detail-intro">Section 3</Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayoutMain(ProductDetail);
