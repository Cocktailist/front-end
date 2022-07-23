import { HeaderContent, CrossLine, HeaderDiv, TitleLogo, TitleDiv } from "./styledComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import IconBack from "./static/back_i.png";

function Header({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <HeaderDiv>
      <HeaderContent>
        <TitleLogo src={IconBack}></TitleLogo>
        <TitleDiv>CocktailBar</TitleDiv>
        <div></div>
      </HeaderContent>
      <CrossLine />
    </HeaderDiv>
  );
}

export default Header;
