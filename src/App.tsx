import { createGlobalStyle } from "styled-components";
import "./style/reset.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

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
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
