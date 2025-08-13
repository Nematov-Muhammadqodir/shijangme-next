import TopNavigation from "@/libs/components/admin/TopNavigation";
import withLayoutAdmin from "@/libs/components/layout/AdminLayout";
import { MembersInquiry } from "@/libs/types/member/member.input";
import {
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import React, { useCallback, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Member } from "@/libs/types/member/member";
import { T } from "@/libs/types/common";
import { GET_ALL_MEMBERS_BY_ADMIN } from "@/apollo/admin/query";
import { MemberType } from "@/libs/enums/member.enum";
import MemberHorizontalCard from "@/libs/components/admin/MemberHorizontalCard";
import { MemberUpdate } from "@/libs/types/member/member.update";
import { UPDATE_MEMBER_BY_ADMIN } from "@/apollo/admin/mutation";
import { sweetErrorHandling } from "@/libs/types/sweetAlert";

const Users = ({ initialInquiry, ...props }: any) => {
  const [anchorEl, setAnchorEl] = useState<[] | HTMLElement[]>([]);
  const [membersInquiry, setMembersInquiry] =
    useState<MembersInquiry>(initialInquiry);
  const [members, setMembers] = useState<Member[]>([]);
  const [membersTotal, setMembersTotal] = useState<number>(0);
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("ALL");

  //APOLLO REQUESTS
  /** APOLLO REQUESTS **/
  const [updateMemberByAdmin] = useMutation(UPDATE_MEMBER_BY_ADMIN);
  const {
    loading: getAllMembersLoading,
    data: getAllMembersData,
    error: getAllMembersError,
    refetch: getAllMembersRefetch,
  } = useQuery(GET_ALL_MEMBERS_BY_ADMIN, {
    fetchPolicy: "network-only",
    variables: { input: membersInquiry },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data: T) => {
      setMembers(data?.getAllMembersByAdmin?.list);
      setMembersTotal(data?.getAllMembersByAdmin?.metaCounter[0]?.total ?? 0);
    },
  });

  //HANDLERS
  const textHandler = useCallback((value: string) => {
    try {
      setSearchText(value);
    } catch (err: any) {
      console.log("textHandler: ", err.message);
    }
  }, []);

  const searchTextHandler = () => {
    try {
      setMembersInquiry({
        ...membersInquiry,
        search: {
          ...membersInquiry.search,
          text: searchText,
        },
      });
    } catch (err: any) {
      console.log("searchTextHandler: ", err.message);
    }
  };

  const searchTypeHandler = async (newValue: string) => {
    try {
      setSearchType(newValue);

      if (newValue !== "ALL") {
        setMembersInquiry({
          ...membersInquiry,
          page: 1,
          sort: "createdAt",
          search: {
            ...membersInquiry.search,
            memberType: newValue as MemberType,
          },
        });
      } else {
        delete membersInquiry?.search?.memberType;
        setMembersInquiry({ ...membersInquiry });
      }
    } catch (err: any) {
      console.log("searchTypeHandler: ", err.message);
    }
  };

  const menuIconClickHandler = (e: any, index: number) => {
    const tempAnchor = anchorEl.slice();
    tempAnchor[index] = e.currentTarget;
    setAnchorEl(tempAnchor);
  };
  const menuIconCloseHandler = () => {
    setAnchorEl([]);
  };

  const updateMemberHandler = async (updateData: MemberUpdate) => {
    try {
      await updateMemberByAdmin({
        variables: { input: updateData },
      });
      menuIconCloseHandler();
      await getAllMembersRefetch({ input: membersInquiry });
    } catch (err: any) {
      sweetErrorHandling(err).then();
    }
  };

  const memberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="users-page">
      <Stack className="users-page-intro">
        <span className="page-name">Users Page</span>
        <span className="page-desc">View All Users</span>
      </Stack>
      <TopNavigation initialInquiry={membersInquiry} type="users" />
      <Stack className="members-list-main-container">
        <Stack className="search-container">
          <OutlinedInput
            value={searchText}
            onChange={(e: any) => textHandler(e.target.value)}
            sx={{ width: "100%" }}
            className={"search"}
            placeholder="Search user name"
            onKeyDown={(event) => {
              if (event.key == "Enter") searchTextHandler();
            }}
            endAdornment={
              <>
                {searchText && (
                  <CancelRoundedIcon
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      setSearchText("");
                      setMembersInquiry({
                        ...membersInquiry,
                        search: {
                          ...membersInquiry.search,
                          text: "",
                        },
                      });
                      await getAllMembersRefetch({ input: membersInquiry });
                    }}
                  />
                )}
                <InputAdornment
                  position="end"
                  onClick={() => searchTextHandler()}
                >
                  <img src="/img/icons/search_icon.png" alt={"searchIcon"} />
                </InputAdornment>
              </>
            }
          />
          <Select
            sx={{ width: "160px", ml: "20px" }}
            value={searchType}
            className="select-container"
          >
            <MenuItem value={"ALL"} onClick={() => searchTypeHandler("ALL")}>
              All
            </MenuItem>
            <MenuItem value={"USER"} onClick={() => searchTypeHandler("USER")}>
              User
            </MenuItem>
            <MenuItem
              value={"AGENT"}
              onClick={() => searchTypeHandler("AGENT")}
            >
              Agent
            </MenuItem>
            <MenuItem
              value={"ADMIN"}
              onClick={() => searchTypeHandler("ADMIN")}
            >
              Admin
            </MenuItem>
          </Select>
        </Stack>
        <Stack className="members-list-container">
          <Stack className="member-list-header">
            <span className="mb-id">MB ID</span>
            <span className="nickname">NICK NAME</span>
            <span className="phone">PHONE NUM</span>
            <span className="type">STATE</span>
            <span className="state">MEMBER TYPE</span>
          </Stack>
          <Stack className="members-list">
            {members.map((member, index) => {
              return (
                <MemberHorizontalCard
                  menuIconClickHandler={menuIconClickHandler}
                  anchorEl={anchorEl}
                  updateMemberHandler={updateMemberHandler}
                  menuIconCloseHandler={menuIconCloseHandler}
                  index={index}
                  member={member}
                />
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

Users.defaultProps = {
  initialInquiry: {
    page: 1,
    limit: 10,
    sort: "createdAt",
    search: {},
  },
};

export default withLayoutAdmin(Users);
