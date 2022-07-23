import React from "react";
import { Wrapper, Img, Texts, TextBig, TextSmall, CocktailSection } from "./CocktionaryStyledComponent";

/**Images */
import c1 from "./static/d_01.jpg";
import c2 from "./static/d_02.jpg";
import c3 from "./static/d_03.jpg";
import c4 from "./static/d_04.jpg";
import c5 from "./static/d_05.jpg";
import c6 from "./static/d_06.jpg";

const cocktails = [
  { img: c1, cocktailName: "모히또", engName: "Mojito" },
  { img: c2, cocktailName: "데낄라 선라이즈", engName: "Tequila Sunrise" },
  { img: c3, cocktailName: "미도리 사워", engName: "Midori Sour" },
  { img: c4, cocktailName: "준벅", engName: "Junbuck" },
  { img: c5, cocktailName: "오렌지 그랑 마르니에", engName: "Orange Grang Marnie" },
  { img: c6, cocktailName: "마가리타", engName: "Margarita" },
];

function Cocktionary() {
  return (
    <Wrapper>
      {cocktails.map((e) => {
        return (
          <>
            <CocktailSection
              onClick={() => {
                window.location.href = "/roro/cocktionary_detail.html";
              }}
            >
              <Img src={e.img}></Img>
              <Texts>
                <TextBig>{e.cocktailName}</TextBig>
                <TextSmall>{e.engName}</TextSmall>
              </Texts>
            </CocktailSection>
          </>
        );
      })}
    </Wrapper>
  );
}

export default React.memo(Cocktionary);
