import styled, { keyframes } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}

export const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 36px;
`;
