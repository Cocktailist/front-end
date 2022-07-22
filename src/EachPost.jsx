import React from "react";
import { useNavigate } from "react-router-dom";
import { PostLink, TextMedium } from "./styledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

function TrendingPost({ userImg, userName, board, date, title, content }) {
  const navigate = useNavigate();

  // const goPost = () => {
  //   navigate(`${"/post/" + postID}`);
  // };

  return (
    <>
      {/* <PostingHeader>
        <UserImg></UserImg>
        <TextMedium>{userName}</TextMedium>
        <TextLight>{board}</TextLight>
        <TextLight>{date}</TextLight>
      </PostingHeader>
      <PostingMain>
        <TextMedium size="16.7px">{title}</TextMedium>
        <TextLight>{content}</TextLight>
      </PostingMain> */}
    </>
  );
}

export default TrendingPost;
