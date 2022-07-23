import React, { useState, useEffect, useCallback } from "react";
import { UserMainSection } from "./styledComponent";
import { TrendingPostLists, TrendingPostHeader, TextMedium, TextLight } from "./styledComponent";
import { CrossLine } from "./styledComponent";

import { FlexRowAround, Wrapper, MenuBox, FlexCol } from "./OrderMainStyledComponent";
import cocktailbarImg from "./static/cocktailbar_image.png";
import TrendingPost from "./TrendingPost";

import loadingIcon from "./loading.svg";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Community = ({ apiUrl }) => {
  /** 더미데이터들 */
  const cocktailbar = "도파민";
  const cocktailbarDesc = "동성로 술집 황홀한 대구 야경 칵테일";
  const cocktailbarTags = ["관람차뷰", "데이트코스", "시그니처칵테일"];
  const trendingPosts = [
    { id: 1, userImg: "", userName: "피에르앙리", board: "아이디어 게시판", date: "2022-07-22", title: "이거 맛없으면 500만원", content: "오늘은 오랜만에 칵테일을 주조해보았다. 친구가 저번에 먹다 남은 보드카를 활용해 만들었다." },
    { id: 2, userImg: "", userName: "보보로로", board: "나눔 게시판", date: "2022-07-23", title: "진로 진토닉 선착순 3명", content: "선착순 3명이다. 010 - 4794- 6783 문자 먼저 오는 순으로 받겠다." },
    { id: 3, userImg: "", userName: "미키마우스", board: "나눔 게시판", date: "2022-07-23", title: "진로 진토닉 선착순 3명", content: "선착순 3명이다. 010 - 4794- 6783 문자 먼저 오는 순으로 받겠다." },
    { id: 4, userImg: "", userName: "멋쟁이사자처럼", board: "나눔 게시판", date: "2022-07-23", title: "진로 진토닉 선착순 3명", content: "선착순 3명이다. 010 - 4794- 6783 문자 먼저 오는 순으로 받겠다." },
    { id: 5, userImg: "", userName: "헤헤헤헤헤", board: "나눔 게시판", date: "2022-07-23", title: "진로 진토닉 선착순 3명", content: "선착순 3명이다. 010 - 4794- 6783 문자 먼저 오는 순으로 받겠다." },
    { id: 6, userImg: "", userName: "잠온다아아아", board: "나눔 게시판", date: "2022-07-23", title: "진로 진토닉 선착순 3명", content: "선착순 3명이다. 010 - 4794- 6783 문자 먼저 오는 순으로 받겠다." },
  ];

  // TODO: LocaionBox를 styledComponents 에서 개발이 가능한지 모르겠다.
  return (
    <>
      {/* 나눔 자유 추천 아이디어 */}
      <UserMainSection>
        <FlexRowAround>
          <MenuBox status="active">
            <TextMedium status="active">나눔</TextMedium>
          </MenuBox>
          <MenuBox>
            <TextMedium>자유</TextMedium>
          </MenuBox>
          <MenuBox>
            <TextMedium>추천</TextMedium>
          </MenuBox>
          <MenuBox>
            <TextMedium>아이디어</TextMedium>
          </MenuBox>
        </FlexRowAround>
        <TrendingPostLists>
          {trendingPosts.map((e) => (
            <>
              <TrendingPost key={e.id} userImg={e.userImg} userName={e.userName} date={e.date} title={e.title} content={e.content}></TrendingPost>
              <CrossLine />
            </>
          ))}
        </TrendingPostLists>
      </UserMainSection>
    </>
  );
};

export default Community;
