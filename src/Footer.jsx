import React from "react";
import { FooterDiv, FooterIcon } from "./styledComponent";
import { useNavigate, Link } from "react-router-dom";

/**Images */
import nav_i01 from "./static/nav_i01.png";
import nav_i02 from "./static/nav_i02.png";
import nav_i03 from "./static/nav_i03.png";
import nav_i04 from "./static/nav_i04.png";

function Footer() {
  return (
    <FooterDiv>
      <Link to="/cocktionary">
        <FooterIcon src={nav_i01} alt="icon"></FooterIcon>
      </Link>
      <Link to="/cocktionary">
        <FooterIcon src={nav_i02} alt="icon"></FooterIcon>
      </Link>
      <Link to="/cocktionary">
        <FooterIcon src={nav_i03} alt="icon"></FooterIcon>
      </Link>
      <Link to="/cocktionary">
        <FooterIcon src={nav_i04} alt="icon"></FooterIcon>
      </Link>
    </FooterDiv>
  );
}

export default React.memo(Footer);
