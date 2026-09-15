import styled from "styled-components";

function Coins() {
  const Title = styled.h1`
    color: ${(prop) => prop.theme.accentColor};
  `;
  return <Title>Coins</Title>;
}
export default Coins;
