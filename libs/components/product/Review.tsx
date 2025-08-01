import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Moment from "react-moment";

const Review = () => {
  // const { comment } = props;
  //   console.log('reviews', comment);
  const router = useRouter();
  // const user = useReactiveVar(userVar);
  /*
  const imagePath: string = comment?.memberData?.memberImage
		? `${REACT_APP_API_URL}/${comment?.memberData?.memberImage}`
		: '/img/profile/defaultUser.svg';
        */

  /** HANDLERS **/
  //   const goMemberPage = (id: string) => {
  //     if (id === user?._id) router.push("/mypage");
  //     else router.push(`/member?memberId=${id}`);
  //   };
  return (
    <Stack className="review-config">
      <Stack className={"review-mb-info"}>
        <Stack className={"img-name-box"}>
          <img src="/img/profile/defaultImg.jpg" alt="" className={"img-box"} />
          <Stack>
            <Typography
              className={"name"}
              //   onClick={() => goMemberPage(comment?.memberData?._id as string)}
            >
              Kevin
            </Typography>
            <Typography className={"date"}>
              <Moment format={"DD MMMM, YYYY"}>01.03.2002</Moment>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography className={"description"}>
          COMMENT CONTENT WILL BE HERE: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio odit minus tempora illum dicta earum
          similique, doloremque aut cum vero.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Review;
