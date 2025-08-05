import { ProductStatus } from "@/libs/enums/product.enum";
import { Product } from "@/libs/types/product/product";
import { VendorProductsInquery } from "@/libs/types/product/product.input";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MyPageProductCard } from "./MyPageProductCard";

const MyProducts = ({ initialInput, ...props }: any) => {
  const [searchFilter, setSearchFilter] =
    useState<VendorProductsInquery>(initialInput);
  const [vendorProducts, setVendorProducts] = useState<Product[]>([]);
  // const vendorProducts = [1, 2, 4];
  const [total, setTotal] = useState<number>(0);
  const router = useRouter();

  //HANDLERS
  const changeStatusHandler = (value: ProductStatus) => {
    setSearchFilter({ ...searchFilter, search: { productStatus: value } });
  };
  return (
    <div id="my-product-page">
      <Stack className="main-title-box">
        <Stack className="right-box">
          <Typography className="main-title">My Products</Typography>
          <Typography className="sub-title">
            We are glad to see you again!
          </Typography>
        </Stack>
      </Stack>
      <Stack className="property-list-box">
        <Stack className="tab-name-box">
          <Typography
            onClick={() => changeStatusHandler(ProductStatus.ACTIVE)}
            className={
              searchFilter.search.productStatus === "ACTIVE"
                ? "active-tab-name"
                : "tab-name"
            }
          >
            On Sale
          </Typography>
          <Typography
            onClick={() => changeStatusHandler(ProductStatus.SOLD)}
            className={
              searchFilter.search.productStatus === "SOLD"
                ? "active-tab-name"
                : "tab-name"
            }
          >
            On Sold
          </Typography>
        </Stack>
        <Stack className="list-box">
          <Stack className="listing-title-box">
            <Typography className="title-text">Listing title</Typography>
            <Typography className="title-text">Date Published</Typography>
            <Typography className="title-text">Status</Typography>
            <Typography className="title-text">View</Typography>
            {searchFilter.search.productStatus === "ACTIVE" ? (
              <Typography className="title-text">Action</Typography>
            ) : null}
          </Stack>
          {vendorProducts?.length === 0 ? (
            <div className={"no-data"}>
              <img src="/img/icons/icoAlert.svg" alt="" />
              <p>No Product found!</p>
            </div>
          ) : (
            vendorProducts.map((product: Product) => {
              return <MyPageProductCard product={product} />;
            })
          )}
        </Stack>
      </Stack>
    </div>
  );
};

MyProducts.defaultProps = {
  initialInput: {
    page: 1,
    limit: 5,
    sort: "createdAt",
    search: {
      productStatus: "ACTIVE",
    },
  },
};

export default MyProducts;
