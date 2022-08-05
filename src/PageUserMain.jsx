import React, { useState, useEffect, useCallback } from "react";
import { LocationBox, UserMainSection, TodayCocktailBarSection, TodayCocktailBarHeader, TextMedium, TextLight, TodayCocktailBarImg, TodayCocktailBarStoreSection, TodayCocktailBarTagSection, TodayCocktailBarTag } from "./styledComponent";
import { TrendingPostSection, TrendingPostHeader, TrendingPostLists } from "./styledComponent";
import { CrossLine } from "./styledComponent";

import cocktailbarImg from "./static/cocktailbar_image.png";
import TrendingPost from "./TrendingPost";

import loadingIcon from "./loading.svg";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const PageUserMain = ({ apiUrl }) => {
  /** 더미데이터들 */
  const cocktailbar = "도파민";
  const cocktailbarDesc = "동성로 술집 황홀한 대구 야경 칵테일";
  const cocktailbarTags = ["관람차뷰", "데이트코스", "시그니처칵테일"];
  const trendingPosts = [
    { id: 1, userImg: "", userName: "피에르앙리", board: "아이디어 게시판", date: "2022-07-22", title: "이거 맛없으면 500만원", content: "오늘은 오랜만에 칵테일을 주조해보았다. 친구가 저번에 먹다 남은 보드카를 활용해 만들었다." },
    { id: 2, userImg: "", userName: "캣스터냇츠", board: "나눔 게시판", date: "2022-07-23", title: "진로 토닉 선착순 3명", content: "선착순 3명이다. 010 - 4794- 6783 문자 먼저 오는 순으로 받겠다." },
    { id: 3, userImg: "", userName: "낫파운드군", board: "자유 게시판", date: "2022-07-23", title: "피나콜라다 vs 모히또", content: "초보자가 즐기기 가장 쉬운 칵테일 골라주세요!! ㅎ" },
  ];

  // TODO: LocaionBox를 styledComponents 에서 개발이 가능한지 모르겠다.
  return (
    <>
      <UserMainSection>
        <LocationBox placeholder="hello world!"></LocationBox>
        <TodayCocktailBarSection>
          <TodayCocktailBarHeader>
            <TextMedium size="18.3px" color="rgb(131, 66, 213)">
              오늘의 추천 칵테일바
            </TextMedium>
            <TextLight size="15px" color="rgb(131, 66, 213)">
              more+
            </TextLight>
          </TodayCocktailBarHeader>
          <a href="./roro/cocktailbar_detail.html">
            <TodayCocktailBarImg src={cocktailbarImg} />
          </a>
          <TodayCocktailBarStoreSection>
            <TextMedium size="16.7px">{cocktailbar}</TextMedium>
            <TextLight size="15px">{cocktailbarDesc}</TextLight>
            <div></div>
            <div></div>
          </TodayCocktailBarStoreSection>
          <TodayCocktailBarTagSection>
            {cocktailbarTags.map((e) => (
              <TodayCocktailBarTag>{`#${e}`}</TodayCocktailBarTag>
            ))}
          </TodayCocktailBarTagSection>
        </TodayCocktailBarSection>
        <CrossLine />
        <TrendingPostSection>
          <TrendingPostHeader>
            <TextMedium size="18.3px" color="rgb(131, 66, 213)">
              실시간 인기글
            </TextMedium>
            <TextLight size="15px" color="rgb(131, 66, 213)">
              more+
            </TextLight>
          </TrendingPostHeader>
          <TrendingPostLists>
            {trendingPosts.map((e) => (
              <TrendingPost key={e.id} userImg={e.userImg} userName={e.userName} board={e.board} date={e.date} title={e.title} content={e.content}></TrendingPost>
            ))}
          </TrendingPostLists>
        </TrendingPostSection>
      </UserMainSection>

      {/* 구버젼 */}
      {/* <PostTitleDiv>
        <FontAwesomeIcon onClick={getPostList} icon={faArrowsRotate} />
        <PostTitle>익명게시판</PostTitle>
        <CursorDiv>
          <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
        </CursorDiv>
      </PostTitleDiv>
      <PostListDiv>
        {loading ? (
          <LoadingDiv>
            <LoadingImg src={loadingIcon} />
          </LoadingDiv>
        ) : postList.length === 0 ? (
          <LoadingDiv>아직 글이 없습니다</LoadingDiv>
        ) : (
          <ul>
            {postList.map((element) => (
              <EachPost key={element.id} title={element.title} postID={element.id} />
            ))}
          </ul>
        )}
      </PostListDiv>
      <PagingSection>
        <PagenumberDiv
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        {pages.map((pageNum) => (
          <PagenumberDiv key={pageNum} onClick={() => setPage(pageNum)}>
            {pageNum}
          </PagenumberDiv>
        ))}
        <PagenumberDiv
          onClick={() => {
            if (pages.length > page) {
              setPage(page + 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection> */}
    </>
  );
};

export default PageUserMain;
