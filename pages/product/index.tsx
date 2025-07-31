import withLayoutMain from "@/libs/components/layout/LayoutHome";
import Filter from "@/libs/components/product/Filter";
import { ProductsInquiry } from "@/libs/types/product/product.input";
import { Box, Button, Container, Menu, MenuItem, Stack } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, MouseEvent, useState, ChangeEvent } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Direction, Message } from "@/libs/enums/common.enum";
import { T } from "@/libs/types/common";

const Products: NextPage = ({ initialInput, ...props }: any) => {
  const router = useRouter();
  const [searchFilter, setSearchFilter] = useState<ProductsInquiry>(
    router?.query?.input
      ? JSON.parse(router?.query?.input as string)
      : initialInput
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sortingOpen, setSortingOpen] = useState(false);
  const [filterSortName, setFilterSortName] = useState("New");
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
            <Stack className="stort-by"></Stack>
            <Stack>Product cards</Stack>
          </Stack>
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
