import { Main, MediaDiv } from "./styledComponent";
// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import Header from "./Header";
import Slogun from "./Slogun";
import Footer from "./Footer";

import { Routes, Route } from "react-router-dom";
import ShowPostList from "./ShowPostList";
import ShowPost from "./ShowPost";
import WritePost from "./WritePost";

const API_URL = "https://reactapitest.pythonanywhere.com/api/";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      {/* ThemProvider랑 GlobalStyles는 그냥 이대로 쓰는것같긴함. */}
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {/* 솔직히 지 금까지 다 알겠는데 MediaDiv는 뭔지 모르겠음. */}
        <MediaDiv>
          {/* Header, Main, Slogun은 아무래도 공통된애들이니까 memo로 리렌더링 안되게 해둔거임 */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            {/* slogun 이해함. section안에 2개의 컴포넌트가 있음. 둘 다 스타일드 컴포넌트였음! */}
            <Slogun />
            <Routes>
              <Route exact path="/" element={<ShowPostList apiUrl={API_URL} />}></Route>
              <Route path="/write" element={<WritePost apiUrl={API_URL} />}></Route>
              <Route path="/post/:postID" element={<ShowPost apiUrl={API_URL} />}></Route>
            </Routes>
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
