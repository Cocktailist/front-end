import React from "react";
import { FlexRow, Wrapper, MenuBox, FlexCol } from "./OrderMainStyledComponent";
import { TextMedium, IMG } from "./styledComponent";
import { Link } from "react-router-dom";

import CocktailSection from "./CocktailSection.jsx";

/**Images */
// import cocktail1 from "./static/d_01.jpg";
// import cocktail2 from "./static/d_02.jpg";
// import cocktail3 from "./static/d_03.jpg";
// import cocktail4 from "./static/d_04.jpg";
// import cocktail5 from "./static/d_05.jpg";

import cock1 from "./static/cock1.png";
import cock2 from "./static/cock2.png";
import cock3 from "./static/cock3.png";
import cock4 from "./static/cock4.png";

// const cocktails = [
//   { img: cocktail1, cocktailName: "모히또", ingredients: "럼, 민트, 라임, 설탕시럽" },
//   { img: cocktail2, cocktailName: "데낄라 선라이즈", ingredients: "데낄라, 오렌지주스, 석류시럽" },
// ];

function OrderMain() {
  return (
    <Wrapper>
      <FlexRow>
        <MenuBox status="active">
          <TextMedium status="active">전체 메뉴</TextMedium>
        </MenuBox>
        <MenuBox>
          <TextMedium>추천 메뉴</TextMedium>
        </MenuBox>
      </FlexRow>
      <FlexCol>
        <a href="./roro/order_mojito.html">
          <IMG src={cock1}></IMG>
        </a>
        <IMG src={cock2}></IMG>
        <IMG src={cock3}></IMG>
        <IMG src={cock4}></IMG>
        {/* {cocktails.map((e, idx) => {
          return <CocktailSection key={idx} img={e.img} name={e.cocktailName} ingredients={e.ingredients}></CocktailSection>;
        })} */}
      </FlexCol>
    </Wrapper>
  );
}

export default React.memo(OrderMain);
