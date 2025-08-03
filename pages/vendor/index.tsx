import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Button, Menu, MenuItem, Pagination, Stack } from "@mui/material";
import { useRouter } from "next/router";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import VendorCard from "@/libs/components/vendor/VendorCard";

const VendorList = ({ initialInput, ...props }: any) => {
  const vendors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(vendors.length / itemsPerPage);

  /** APOLLO REQUESTS **/
  // const [likeTargetMember] = useMutation(LIKE_TARGET_MEMBER);

  /** HANDLERS **/
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // Optional: Scroll to top of the list when page changes for better UX
    window.scrollTo({ top: 700, behavior: "smooth" });
  };
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

  // const likeMemberHandler = async (user: any, id: string) => {
  //   try {
  //     if (!id) return;
  //     if (!user) throw new Error(Messages.error2);

  //     await likeTargetMember({ variables: { input: id } });

  //     await getAgentsRefetch({ input: searchFilter });
  //     await sweetTopSmallSuccessAlert("success", 800);
  //   } catch (error: any) {
  //     console.log("Error, likeMemberHandler", error);
  //     sweetMixinErrorAlert(error.message).then();
  //   }
  // };
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
        <Stack className={"card-wrap"}>
          {vendors?.length === 0 ? (
            <div className={"no-data"}>
              <img src="/img/icons/icoAlert.svg" alt="" />
              <p>No Agents found!</p>
            </div>
          ) : (
            vendors
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((vendor, index) => {
                return <VendorCard key={index} />;
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
  );
};

VendorList.defaultProps = {
  initialInput: {
    page: 1,
    limit: 6,
    sort: "memberLikes",
    direction: "DESC",
    search: {},
  },
};

export default withLayoutMain(VendorList);
