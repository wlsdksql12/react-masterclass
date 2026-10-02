import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./style/reset.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { darkTheme, lightTheme } from "./theme";
import { createContext, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { isDarkAtom } from "./atoms";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300&display=swap');
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Source Sans 3", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    background-color: ${(prop) => prop.theme.bgColor};
    color: ${(prop) => prop.theme.textColor}
  }

  a {
    text-decoration:none;
    color: inherit;
  }
`;

export const IsDarkContext = createContext({
  isDark: false,
  toggleDark: () => {},
});

function App() {
  const isDark = useAtomValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
