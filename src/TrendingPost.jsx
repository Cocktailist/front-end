import React from "react";
// import { useNavigate } from "react-router-dom";
import { PostingMain, TextMedium, PostingHeader, UserImg, TextLight } from "./styledComponent";

function TrendingPost({ userImg, userName, board, date, title, content }) {
  // const navigate = useNavigate();

  // const goPost = () => {
  //   navigate(`${"/post/" + postID}`);
  // };

  return (
    <>
      <PostingHeader>
        <UserImg></UserImg>
        <TextLight size="16.6px">{userName}</TextLight>
        <TextLight size="13.3px" color="color: rgb(150, 150, 150);">
          {board}
        </TextLight>
        <div></div>
        <div></div>
        <TextLight size="13.3px" color="color: rgb(150, 150, 150);">
          {date}
        </TextLight>
      </PostingHeader>
      <PostingMain>
        <TextMedium size="16.6px">{title}</TextMedium>
        <TextLight size="15px">{content}</TextLight>
      </PostingMain>
    </>
  );
}

export default TrendingPost;
