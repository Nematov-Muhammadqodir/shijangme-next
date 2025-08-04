import { Pagination, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MyProductsCard from "../common/MyProductsCard";
import { ProductsInquiry } from "@/libs/types/product/product.input";
import { NextPage } from "next";
import { T } from "@/libs/types/common";

const MemberProducts: NextPage = ({ initialInput, ...props }: any) => {
  const vendorProducts = [1, 2, 3, 4, 5];
  const [total, setTotal] = useState<number>(0);
  const [searchFilter, setSearchFilter] = useState<ProductsInquiry>({
    ...initialInput,
  });

  /** HANDLERS **/
  const paginationHandler = (e: T, value: number) => {
    setSearchFilter({ ...searchFilter, page: value });
  };
  return (
    <div id="member-products-page">
      <Stack className="main-title-box">
        <Stack className="right-box">
          <Typography className="main-title">Products</Typography>
        </Stack>
      </Stack>
      <Stack className="products-list-box">
        <Stack className="list-box">
          {vendorProducts?.length > 0 && (
            <Stack className="listing-title-box">
              <Typography className="title-text">Listing title</Typography>
              <Typography className="title-text">Date Published</Typography>
              <Typography className="title-text">Status</Typography>
              <Typography className="title-text">View</Typography>
            </Stack>
          )}
          {vendorProducts?.length === 0 && (
            <div className={"no-data"}>
              <img src="/img/icons/icoAlert.svg" alt="" />
              <p>No Property found!</p>
            </div>
          )}
          {vendorProducts.map((product) => {
            return <MyProductsCard />;
          })}
          {vendorProducts.length !== 0 && (
            <Stack className="pagination-config">
              <Stack className="pagination-box">
                <Pagination
                  count={Math.ceil(total / searchFilter.limit)}
                  page={searchFilter.page}
                  shape="circular"
                  color="primary"
                  onChange={paginationHandler}
                />
              </Stack>
              <Stack className="total-result">
                <Typography>{total} property available</Typography>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Stack>
    </div>
  );
};
MemberProducts.defaultProps = {
  initialInput: {
    page: 1,
    limit: 5,
    sort: "createdAt",
    search: {
      memberId: "",
    },
  },
};

export default MemberProducts;
