import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Button, Menu, MenuItem, Stack } from "@mui/material";
import { useRouter } from "next/router";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";

const VendorList = ({ initialInput, ...props }: any) => {
  const router = useRouter();
  const [searchFilter, setSearchFilter] = useState<any>(
    router?.query?.input
      ? JSON.parse(router?.query?.input as string)
      : initialInput
  );
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [filterSortName, setFilterSortName] = useState("Recent");
  const [sortingOpen, setSortingOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  /** HANDLERS **/
  const sortingClickHandler = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setSortingOpen(true);
  };

  const sortingCloseHandler = () => {
    setSortingOpen(false);
    setAnchorEl(null);
  };

  const sortingHandler = async (e: React.MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.id;
    if (e.currentTarget.id === "recent") {
      await router.push(
        `/agent?input=${JSON.stringify({
          ...searchFilter,
          sort: "createdAt",
          direction: "DESC",
        })}`,
        `/agent?input=${JSON.stringify({
          ...searchFilter,
          search: {
            ...searchFilter.search,
            sort: "createdAt",
            direction: "DESC",
          },
        })}`,
        { scroll: false }
      );
    } else if (e.currentTarget.id === "old") {
      await router.push(
        `/agent?input=${JSON.stringify({
          ...searchFilter,
          sort: "createdAt",
          direction: "ASC",
        })}`,
        `/agent?input=${JSON.stringify({
          ...searchFilter,
          sort: "createdAt",
          direction: "ASC",
        })}`,
        { scroll: false }
      );
    } else if (e.currentTarget.id === "likes") {
      await router.push(
        `/agent?input=${JSON.stringify({
          ...searchFilter,
          sort: "memberLikes",
          direction: "DESC",
        })}`,
        `/agent?input=${JSON.stringify({
          ...searchFilter,
          sort: "memberLikes",
          direction: "DESC",
        })}`,
        { scroll: false }
      );
    } else if (e.currentTarget.id === "views") {
      await router.push(
        `/agent?input=${JSON.stringify({
          ...searchFilter,
          sort: "memberViews",
          direction: "DESC",
        })}`,
        `/agent?input=${JSON.stringify({
          ...searchFilter,
          sort: "memberViews",
          direction: "DESC",
        })}`,
        { scroll: false }
      );
    }
    setSortingOpen(false);
    setAnchorEl2(null);
  };
  return (
    <Stack
      className="agents-list-main-container"
      style={{ marginTop: "100px" }}
    >
      <Stack className="container">
        <Stack className={"filter"}>
          <Box component={"div"} className={"left"}>
            <input
              type="text"
              placeholder={"Search for an agent"}
              value={searchText}
              onChange={(e: any) => setSearchText(e.target.value)}
              onKeyDown={(event: any) => {
                if (event.key == "Enter") {
                  setSearchFilter({
                    ...searchFilter,
                    search: { ...searchFilter.search, text: searchText },
                  });
                }
              }}
            />
          </Box>
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
                <MenuItem onClick={sortingHandler} id={"recent"} disableRipple>
                  Recent
                </MenuItem>
                <MenuItem onClick={sortingHandler} id={"old"} disableRipple>
                  Oldest
                </MenuItem>
                <MenuItem onClick={sortingHandler} id={"likes"} disableRipple>
                  Likes
                </MenuItem>
                <MenuItem onClick={sortingHandler} id={"views"} disableRipple>
                  Views
                </MenuItem>
              </Menu>
            </div>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

VendorList.defaultProps = {
  initialInput: {
    page: 1,
    limit: 10,
    sort: "memberLikes",
    direction: "DESC",
    search: {},
  },
};

export default withLayoutMain(VendorList);
