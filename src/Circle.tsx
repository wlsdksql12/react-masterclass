import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(porps) => porps.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

function Circle(props: ContainerProps) {
  return <Container bgColor={props.bgColor} borderColor={props.borderColor} />;
}

export default Circle;
