import {
  IconButton,
  OutlinedInput,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ProductsInquiry } from "@/libs/types/product/product.input";
import { useRouter } from "next/router";
import { ProductFrom } from "@/libs/enums/product.enum";

interface FilterType {
  searchFilter: ProductsInquiry;
  setSearchFilter: any;
  initialInput: ProductsInquiry;
}

const Filter = (props: FilterType) => {
  const { searchFilter, setSearchFilter, initialInput } = props;
  const router = useRouter();
  const [productOrigin, setProductOrigin] = useState<ProductFrom[]>(
    Object.values(ProductFrom)
  );
  const [searchText, setSearchText] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);
  const refreshHandler = async () => {
    try {
      setSearchText("");
    } catch (err: any) {
      console.log("ERROR, refreshHandler:", err);
    }
  };
  return (
    <Stack className="filter-main-container">
      <Stack className="search-by-text-container">
        <Typography className="title">Search product by name</Typography>
        <Stack className="search-details-container">
          <OutlinedInput
            type="text"
            className="search-input"
            placeholder="What are you looking for?"
            onChange={(e: any) => setSearchText(e.target.value)}
            endAdornment={
              <>
                <CancelRoundedIcon
                  onClick={() => {
                    setSearchText("");
                  }}
                />
              </>
            }
          />
          {/* <img src={"/img/products/search_icon.png"} alt={""} /> */}
          <Tooltip title="Reset">
            <IconButton onClick={refreshHandler}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      <Stack className="find-by-origin-main">
        <p className="title">Product Origin</p>
        <Stack
          className="product-origin"
          style={{ height: showMore ? "253px" : "115px" }}
          onMouseEnter={() => setShowMore(true)}
          //   onMouseLeave={() => {
          //     if (!searchFilter?.search?.locationList) {
          //       setShowMore(false);
          //     }
          //   }}
        ></Stack>
      </Stack>
    </Stack>
  );
};

export default Filter;
