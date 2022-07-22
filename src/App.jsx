import { Main, MediaDiv } from "./styledComponent";
// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

import { Routes, Route } from "react-router-dom";
import ShowPostList from "./ShowPostList";
import PageUserMain from "./PageUserMain";
import ShowPost from "./ShowPost";
import WritePost from "./WritePost";

const API_URL = "https://reactapitest.pythonanywhere.com/api/";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* ThemProvider랑 GlobalStyles는 그냥 이대로 쓰는것같긴함. */}
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {/* 솔직히 지 금까지 다 알겠는데 MediaDiv는 뭔지 모르겠음. */}
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Routes>
              <Route exact path="/1" element={<PageUserMain apiUrl={API_URL} />}></Route>
              <Route exact path="/2" element={<PageUserMain apiUrl={API_URL} />}></Route>
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
