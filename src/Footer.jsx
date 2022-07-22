import React from "react";
import { FooterDiv, FooterIcon } from "./styledComponent";

/**Images */
import nav_i01 from "./images/nav_i01.png";
import nav_i02 from "./images/nav_i02.png";
import nav_i03 from "./images/nav_i03.png";
import nav_i04 from "./images/nav_i04.png";

function Footer() {
  return (
    <FooterDiv>
      <FooterIcon src={nav_i01} alt="icon"></FooterIcon>
      <FooterIcon src={nav_i02} alt="icon"></FooterIcon>
      <FooterIcon src={nav_i03} alt="icon"></FooterIcon>
      <FooterIcon src={nav_i04} alt="icon"></FooterIcon>
    </FooterDiv>
  );
}

export default React.memo(Footer);
