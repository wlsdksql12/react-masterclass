import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinsList = styled.ul``;

export const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
  transition: color 0.2s ease-in;
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(prop) => prop.theme.accentColor};
`;

export const Loader = styled.span`
  font-size: 36px;
  text-align: center;
  display: block;
`;

export const Coinimg = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 2px;
  margin-right: 5px;
`;
