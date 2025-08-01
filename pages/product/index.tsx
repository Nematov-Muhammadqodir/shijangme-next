import withLayoutMain from "@/libs/components/layout/LayoutHome";
import Filter from "@/libs/components/product/Filter";
import { ProductsInquiry } from "@/libs/types/product/product.input";
import {
  Box,
  Button,
  Container,
  Fade,
  Menu,
  MenuItem,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, MouseEvent, useState, ChangeEvent } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Direction, Message } from "@/libs/enums/common.enum";
import { T } from "@/libs/types/common";
import ProductCard from "@/libs/components/product/ProductCard";

const Products: NextPage = ({ initialInput, ...props }: any) => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const router = useRouter();
  const [searchFilter, setSearchFilter] = useState<ProductsInquiry>(
    router?.query?.input
      ? JSON.parse(router?.query?.input as string)
      : initialInput
  );
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sortingOpen, setSortingOpen] = useState(false);
  const [filterSortName, setFilterSortName] = useState("New");

  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

  const pageCount = Math.ceil(products.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = products.slice(startIndex, endIndex);
  /** APOLLO REQUESTS **/
  //! const [likeTargetProduct] = useMutation(LIKE_TARGET_PRODUCT);

  /** LIFECYCLES **/
  useEffect(() => {
    if (router.query.input) {
      const inputObj = JSON.parse(router?.query?.input as string);
      setSearchFilter(inputObj);
    }

    setCurrentPage(searchFilter.page === undefined ? 1 : searchFilter.page);
  }, [router]);

  useEffect(() => {
    console.log("seachFilter", searchFilter);
    //! getProductsRefetch({ input: searchFilter });
  }, [searchFilter]);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // Optional: Scroll to top of the list when page changes for better UX
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const likeProductHandler = async (user: T, id: string) => {
    console.log("likeRefId", id);
    try {
      if (!id) return;
      if (!user._id) throw new Error(Message.NOT_AUTHENTICATED);

      //executeLikeProductsMutation
      //! await likeTargetProduct({ variables: { input: id } });
      //execute getProductsRefetch
      //! await getProductsRefetch({ input: searchFilter });

      //! await sweetTopSmallSuccessAlert('success', 800);
    } catch (err: any) {
      console.log("Error, likePropertyHandler", err);
      //! sweetMixinErrorAlert(err.message).then();
    }
  };

  const handlePaginationChange = async (
    event: ChangeEvent<unknown>,
    value: number
  ) => {
    searchFilter.page = value;
    await router.push(
      `/product?input=${JSON.stringify(searchFilter)}`,
      `/product?input=${JSON.stringify(searchFilter)}`,
      {
        scroll: false,
      }
    );
    setCurrentPage(value);
  };

  const sortingClickHandler = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setSortingOpen(true);
  };

  const sortingCloseHandler = () => {
    setSortingOpen(false);
    setAnchorEl(null);
  };

  const sortingHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    switch (e.currentTarget.id) {
      case "new":
        setSearchFilter({
          ...searchFilter,
          sort: "createdAt",
          direction: Direction.ASC,
        });
        setFilterSortName("New");
        break;
      case "lowest":
        setSearchFilter({
          ...searchFilter,
          sort: "productPrice",
          direction: Direction.ASC,
        });
        setFilterSortName("Lowest Price");
        break;
      case "highest":
        setSearchFilter({
          ...searchFilter,
          sort: "productPrice",
          direction: Direction.DESC,
        });
        setFilterSortName("Highest Price");
    }
    setSortingOpen(false);
    setAnchorEl(null);
  };
  return (
    <Stack sx={{ marginTop: "200px" }} className="all-products-main-container">
      <Stack className="container">
        <Box component={"div"} className={"right"}>
          <span>Sort by</span>
          <div>
            <Button
              onClick={sortingClickHandler}
              endIcon={<KeyboardArrowDownRoundedIcon />}
            >
              {filterSortName}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={sortingOpen}
              onClose={sortingCloseHandler}
              sx={{ paddingTop: "5px" }}
            >
              <MenuItem
                onClick={sortingHandler}
                id={"new"}
                disableRipple
                sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              >
                New
              </MenuItem>
              <MenuItem
                onClick={sortingHandler}
                id={"lowest"}
                disableRipple
                sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              >
                Lowest Price
              </MenuItem>
              <MenuItem
                onClick={sortingHandler}
                id={"highest"}
                disableRipple
                sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              >
                Highest Price
              </MenuItem>
            </Menu>
          </div>
        </Box>
        <Stack className="filtered-products-list">
          <Filter
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
            initialInput={initialInput}
          />

          <Stack className="product-cards-list-container">
            <Stack className="product-cards-list">
              {productsToDisplay.length === 0 ? (
                <Box
                  component={"div"}
                  className={"empty-list"}
                  sx={{ gridColumn: "1 / -1" }}
                >
                  No Discounted Products Available
                </Box>
              ) : (
                productsToDisplay.map((product, key) => (
                  <Fade in={true} timeout={1000} key={key}>
                    <Box>
                      <ProductCard />
                    </Box>
                  </Fade>
                ))
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
      </Stack>
    </Stack>
  );
};

Products.defaultProps = {
  initialInput: {
    page: 1,
    limit: 6,
    sort: "createdAt",
    direction: "DESC",
    search: {},
  },
};

export default withLayoutMain(Products);
