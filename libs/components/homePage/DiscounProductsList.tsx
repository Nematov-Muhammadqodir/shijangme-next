import { Box, Stack, Pagination, Fade } from "@mui/material"; // Import Pagination and Box
import React, { useState } from "react";
import DiscountProductCart from "./DiscountProductCart";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/apollo/user/query";
import { Product } from "@/libs/types/product/product";
import { ProductsInquiry } from "@/libs/types/product/product.input";
import { T } from "@/libs/types/common";

interface DiscountProductsProps {
  initialInput: ProductsInquiry;
}

const DiscounProductsList = ({ initialInput }: DiscountProductsProps) => {
  const finalInput = initialInput ?? {
    page: 1,
    limit: 4,
    sort: "productDiscountRate",
    direction: "DESC",
    search: {},
  };
  const [discountedProducts, setDiscountedProducts] = useState<Product[]>([]);

  console.log("QUERY INPUT", initialInput);
  const {
    loading: getDiscountedProductsLoading,
    data: getDiscountedProductsData,
    error: getDiscountedProductsError,
    refetch: getDiscountedProductsRefetch,
  } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "cache-and-network",
    variables: {
      input: finalInput,
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      console.log("discountedPrpductsData", data?.getProducts?.list);
      setDiscountedProducts(data?.getProducts?.list);
    },
  });
  //& PAGINATION START
  const [page, setPage] = useState(initialInput.page);
  const itemsPerPage = initialInput.limit;
  const pageCount = Math.ceil(discountedProducts.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = discountedProducts.slice(startIndex, endIndex);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //& PAGINATION END

  return (
    <div className="discount-products-list-main-countainer">
      <Stack className="container">
        <Stack className="discount-products-list">
          <Stack className="discount-products-intro">
            <div className="horizontal-line"></div>
            <span>Discounted Products</span>
            <div className="horizontal-line"></div>
          </Stack>
          <Stack className="discount-card-main-container">
            {productsToDisplay.length === 0 ? (
              <Box
                component={"div"}
                className={"empty-list"}
                sx={{ gridColumn: "1 / -1" }}
              >
                No Discounted Products Available
              </Box>
            ) : (
              productsToDisplay.map((product: Product) => (
                <Fade in={true} timeout={1000} key={product._id}>
                  <Box>
                    <DiscountProductCart product={product} />
                  </Box>
                </Fade>
              ))
            )}
          </Stack>

          {pageCount > 1 && (
            <Box
              sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}
            >
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

DiscounProductsList.defaultProps = {
  initialInput: {
    page: 1,
    limit: 4,
    sort: "productDiscountRate",
    direction: "DESC",
    search: {},
  },
};

export default DiscounProductsList;
