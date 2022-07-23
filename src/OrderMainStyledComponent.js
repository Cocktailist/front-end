import styled from "styled-components";

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
  font-family: "GmarketSansMedium";
  font-size: ${(props) => props.size || "15px"};
  color: ${(props) => props.color || "black"};
`;

export const TextLight = styled.div`
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

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0px;
`;

export const FlexRowAround = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuBox = styled.div`
  border-bottom: ${(props) => props.status && "1px solid rgb(131, 66, 213)"};
  width: auto;
  height: 20px;
  margin-right: 10px;
`;

export const CocktailSection = styled.div`
  height: 120px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid black;
`;

export const Wrapper = styled.div`
  margin: 0px auto;
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;
