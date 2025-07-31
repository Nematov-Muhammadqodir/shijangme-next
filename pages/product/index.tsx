import withLayoutMain from "@/libs/components/layout/LayoutHome";
import Filter from "@/libs/components/product/Filter";
import { ProductsInquiry } from "@/libs/types/product/product.input";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Products: NextPage = ({ initialInput, ...props }: any) => {
  const router = useRouter();
  const [searchFilter, setSearchFilter] = useState<ProductsInquiry>(
    router?.query?.input
      ? JSON.parse(router?.query?.input as string)
      : initialInput
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  /** LIFECYCLES **/
  useEffect(() => {
    if (router.query.input) {
      const inputObj = JSON.parse(router?.query?.input as string);
      setSearchFilter(inputObj);
    }

    setCurrentPage(searchFilter.page === undefined ? 1 : searchFilter.page);
  }, [router]);
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
