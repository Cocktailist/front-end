import { createGlobalStyle } from "styled-components";

//yarn add styled-reset
import reset from "styled-reset";

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "white",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
};

// 기본 여백 같은거 없애주는 친구라고함.
export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
