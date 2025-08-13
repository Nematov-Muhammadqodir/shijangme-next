import TopNavigation from "@/libs/components/admin/TopNavigation";
import withLayoutAdmin from "@/libs/components/layout/AdminLayout";
import { MembersInquiry } from "@/libs/types/member/member.input";
import { InputAdornment, OutlinedInput, Stack } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import React, { useCallback, useState } from "react";
import { useQuery } from "@apollo/client";
import { Member } from "@/libs/types/member/member";
import { T } from "@/libs/types/common";
import { GET_ALL_MEMBERS_BY_ADMIN } from "@/apollo/admin/query";

const Users = ({ initialInquiry, ...props }: any) => {
  const [membersInquiry, setMembersInquiry] =
    useState<MembersInquiry>(initialInquiry);
  const [members, setMembers] = useState<Member[]>([]);
  const [membersTotal, setMembersTotal] = useState<number>(0);
  const [searchText, setSearchText] = useState("");

  //APOLLO REQUESTS
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
        </Stack>
        <Stack className="members-list"></Stack>
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
