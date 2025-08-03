import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import React, { useState } from "react";
import { useRouter } from "next/router";
import VendorProductCard from "@/libs/components/common/VendorProductCard";
import StarIcon from "@mui/icons-material/Star";
import VendorReviewCard from "@/libs/components/vendor/VendorReviewCard";
import { CommentGroup } from "@/libs/enums/comment.enum";
import { CommentInput } from "@/libs/types/comment/comment.input";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DoubleCardBanner from "@/libs/components/common/DoubleCardBanner";

const VendorDetail = () => {
  const vendorComments = [1, 2, 3, 4, 5];
  const vendorProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [commentTotal, setCommentTotal] = useState<number>(1);
  const [page, setPage] = useState(1);
  const [insertCommentData, setInsertCommentData] = useState<CommentInput>({
    commentGroup: CommentGroup.MEMBER,
    commentContent: "",
    commentRefId: "",
  });
  const itemsPerPage = 8;
  const pageCount = Math.ceil(vendorProducts.length / itemsPerPage);
  const router = useRouter();
  const userId = "userId";
  const memberId = "userId";

  /** APOLLO REQUESTS **/
  //   const [likeTargetProperty] = useMutation(LIKE_TARGET_PRODUCT);
  //   const [createComment] = useMutation(CREATE_COMMENT);

  /** HANDLERS **/
  const redirectToMemberPageHandler = async (memberId: string) => {
    try {
      if (memberId === userId)
        await router.push(`/mypage?memberId=${memberId}`);
      else await router.push(`/member?memberId=${memberId}`);
    } catch (error) {
      //   await sweetErrorHandling(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // Optional: Scroll to top of the list when page changes for better UX
    window.scrollTo({ top: 250, behavior: "smooth" });
  };

  const createCommentHandler = async () => {
    try {
      //   if (!user._id) return;
      //   if (user._id === agentId)
      throw new Error("Can not write a review for yourself!");
      // execute likeTargetMember Mutation
      //   await createComment({
      //     variables: {
      //       input: insertCommentData,
      //     },
      //   });
      setInsertCommentData({ ...insertCommentData, commentContent: "" });
      //   await getCommentsRefetch({ input: commentInquiry });
    } catch (err: any) {
      //   sweetErrorHandling(err).then();
    }
  };
  return (
    <div
      style={{ marginTop: "300px" }}
      className="vendor-detail-main-container"
    >
      <Stack className="container">
        <Stack className="vendor-info">
          <Box className="vendor-image">
            <img src="/img/profile/defaultImg.jpg" alt="" />
          </Box>
          <Stack
            className="vendor-details"
            onClick={() => redirectToMemberPageHandler("agentId" as string)}
          >
            <span className="vendor-name">Natsuki Kawai</span>
            <div className="vendor-phone">
              <PhoneIcon />
              <span>010 80940023</span>
            </div>
          </Stack>
        </Stack>
        <Stack className="vendor-home-list">
          <Stack className="card-wrap">
            {vendorProducts?.length === 0 ? (
              <div className={"no-data"}>
                <img src="/img/icons/icoAlert.svg" alt="" />
                <p>No vendors found!</p>
              </div>
            ) : (
              vendorProducts
                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map((vendor, index) => {
                  return <VendorProductCard key={index} />;
                })
            )}
          </Stack>
          {pageCount > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={handleChange}
                color="primary"
                size="large"
                showFirstButton
                showLastButton
              />
            </Box>
          )}
        </Stack>

        <DoubleCardBanner />

        <Stack className={"review-box"}>
          <Stack className={"main-intro"}>
            <span>Reviews</span>
            <p>we are glad to see you again</p>
          </Stack>
          {commentTotal !== 0 && (
            <Stack className={"review-wrap"}>
              <Box component={"div"} className={"title-box"}>
                <StarIcon />
                <span>
                  {commentTotal} review{commentTotal > 1 ? "s" : ""}
                </span>
              </Box>
              <Stack className="reviews-list-container">
                {vendorComments.map((comment) => {
                  return <VendorReviewCard />;
                })}
              </Stack>
            </Stack>
          )}
          <Stack className="leave-review-config">
            <Typography className={"main-title"}>Leave A Review</Typography>
            <Typography className={"review-title"}>Review</Typography>
            <textarea
              onChange={({ target: { value } }: any) => {
                setInsertCommentData({
                  ...insertCommentData,
                  commentContent: value,
                });
              }}
              value={insertCommentData.commentContent}
              placeholder="Write a Review "
            ></textarea>
            <Box className={"submit-btn"} component={"div"}>
              <Button
                className={"submit-review"}
                // disabled={
                //   insertCommentData.commentContent === "" || user?._id === ""
                // }
                onClick={createCommentHandler}
                endIcon={<ArrowOutwardIcon />}
              >
                Submit Review
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

VendorDetail.defaultProps = {
  initialInput: {
    page: 1,
    limit: 9,
    search: {
      memberId: "",
    },
  },
  initialComment: {
    page: 1,
    limit: 5,
    sort: "createdAt",
    direction: "ASC",
    search: {
      commentRefId: "",
    },
  },
};

export default withLayoutMain(VendorDetail);
