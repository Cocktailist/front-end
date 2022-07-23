import styled from "styled-components";

export const MediaDiv = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0px auto;
  min-height: 100vh;
  width: 7610px;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bgColor};
  @media screen and (max-width: 7610px) {
    width: 100%;
  }
`;

/** Header */
export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContent = styled.div`
  padding-top: 10px;
  width: 7610px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: "Black Han Sans", sans-serif;
  @media screen and (max-width: 7610px) {
    width: 100%;
  }
`;

export const CrossLine = styled.div`
  margin-top: 6px;
  width: 100%;
  height: 6px;
  background-color: rgb(246, 246, 246);
`;

export const TitleLogo = styled.img`
  height: 20px;
  margin-top: 5px;
`;

export const TitleDiv = styled.div`
  font-size: 25px;
  font-family: "Playfair Display", serif;
  font-weight: 900;
  color: rgb(131, 66, 213);
`;

/** Main */
export const Main = styled.div`
  flex: 1;
`;

/** 1.PageUserMain */
export const UserMainSection = styled.div`
  margin: 0px auto;
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const LocationBox = styled.div`
  border: 1px solid rgb(176, 176, 176);
  border-radius: 20px;
  // width: 100%;
  // width: 10410px;
  // height: 151px;
`;

/** Container flex-column  */
export const TodayCocktailBarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/** Container flex-row (space between) */
export const TodayCocktailBarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
`;

export const TextMedium = styled.div`
  margin-bottom: 10px;
  font-family: "GmarketSansMedium";
  font-size: ${(props) => props.size || "15px"};
  color: ${(props) => props.color || "black"};
`;

export const TextLight = styled.div`
  margin-bottom: 5px;
  font-family: "GmarketSansLight";
  font-size: ${(props) => props.size || "15px"};
  color: ${(props) => props.color || "black"};
`;

export const TodayCocktailBarImg = styled.img`
  max-width: 100%;
  max-height: 175px;
  width: auto;
  height: auto;
`;

export const TodayCocktailBarStoreSection = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TodayCocktailBarTagSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const TodayCocktailBarTag = styled.div`
  border: 1px solid rgb(246, 246, 246);
  font-size: 13px;
  padding: 2px 3px;
  margin-top: 10px;
  margin-right: 10px;
  border-width: 1px;
  border-color: rgb(246, 246, 246);
  border-style: solid;
  background-color: rgb(131, 66, 213);
  color: white;
  font-family: "GmarketSansLight";

  display: flex;
  align-items: center;
`;

export const TrendingPostSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TrendingPostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
`;

export const TrendingPostLists = styled.ul``;

export const PostSection = styled.div`
  margin: 0px auto;
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;
export const PostTitleDiv = styled.div`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  color: white;
  background-color: #f39926;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const PostTitle = styled.span`
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: "Black Han Sans", sans-serif;
  font-size: 25px;
`;

export const PostListDiv = styled.div`
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
`;

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
`;

export const LoadingImg = styled.img`
  width: 30px;
`;

export const EachPostLi = styled.li`
  margin: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostLink = styled.span`
  margin-left: 5px;
`;
export const PostRepl = styled.div`
  font-family: "Courier New", Courier, monospace;
`;
export const PagingSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px auto;
  width: 150px;
  margin-top: 20px;
`;
export const PagenumberDiv = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f39926;
  border-radius: 5px;
`;

export const CursorDiv = styled.div`
  cursor: pointer;
`;

//ShowPost에 추가되는 스타일 컴포넌트
export const PostReplDiv = styled.div`
  border-top: 2px solid white;
  margin-bottom: 15px;
  width: 100%;
  line-height: 24px;
`;
export const ReplTitleDiv = styled.div`
  font-size: 12px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const ReplWriter = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-weight: bolder;
`;
export const Repl = styled.span`
  font-size: 12px;
`;
export const WriterDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ReplInput = styled.textarea`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  height: 30px;
  border-radius: 5px;
  font-family: "Noto Sans KR", sans-serif;
`;
export const ReplSubmitDiv = styled.div`
  width: 100px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #f39926;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

//WritePost.jsx
export const PostWriteDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const TitleInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
`;
export const ContentsInput = styled.textarea`
  margin-top: 10px;
  padding: 10px;
  height: 400px;
  border-radius: 5px;
  font-family: "Noto Sans KR", sans-serif;
`;
export const PostSubmitDiv = styled.div`
  width: 50%;
  margin: 0px auto;
  margin-top: 15px;
  border-radius: 10px;
  background-color: #f39926;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
export const PostSubmit = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: "Black Han Sans", sans-serif;
  font-size: 20px;
`;

/** Footer */
export const FooterDiv = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const FooterIcon = styled.img`
  height: 25px;
`;

/** TrendingPost */

export const PostingHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const UserImg = styled.div`
  width: 24px;
  height: 24px;
  background-color: black;
  border-radius: 10px;
`;

export const PostingMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const IMG = styled.img`
  max-width: 100%;
  max-height: 120px;
  width: auto;
  height: auto;
  margin: 10px 0px;
`;
