import withLayoutMain from "@/libs/components/layout/LayoutHome";
import Filter from "@/libs/components/product/Filter";
import { ProductsInquiry } from "@/libs/types/product/product.input";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Products: NextPage = ({ initialInput, ...props }: any) => {
  const router = useRouter();
  const [searchFilter, setSearchFilter] = useState<ProductsInquiry>(
    router?.query?.input
      ? JSON.parse(router?.query?.input as string)
      : initialInput
  );
  return (
    <Stack sx={{ marginTop: "200px" }} className="all-products-main-container">
      <Stack className="container">
        <Filter
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          initialInput={initialInput}
        />
        <Stack className="product-cards-list-container">
          <Stack className="stort-by"></Stack>
          <Stack>Product cards</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

Products.defaultProps = {
  initialInput: {
    page: 1,
    limit: 9,
    sort: "createdAt",
    direction: "DESC",
    search: {},
  },
};

export default withLayoutMain(Products);
