import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Pagination, Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import React, { useState } from "react";
import { useRouter } from "next/router";
import VendorProductCard from "@/libs/components/common/VendorProductCard";

const VendorDetail = () => {
  const vendorProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const pageCount = Math.ceil(vendorProducts.length / itemsPerPage);
  const router = useRouter();
  const userId = "userId";
  const memberId = "userId";
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
