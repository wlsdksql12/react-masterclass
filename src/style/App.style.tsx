import styled, { keyframes } from "styled-components";

export const Body = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Father = styled.div`
  display: flex;
`;

export const Box = styled.div`
  background-color: ${(props) => props.$bgColor};
  width: 100px;
  height: 100px;
`;

export const BoxOne = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.textColor};
`;

export const Circle = styled(Box)`
  border-radius: 50%;
`;

export const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

export const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

export const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0%;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 50%;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0%;
  }
`;

export const Emoji = styled.span`
  font-size: 36px;
  &:active {
    opacity: 0;
  }
`;

export const AnimationBox = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    font-size: 36px;
    &:hover {
      font-size: 360px;
    }
  }
`;
