import {
  AnimationBox,
  Body,
  BoxOne,
  Btn,
  Circle,
  Emoji,
  Father,
  Input,
  Text,
} from "./style/App.style";
import "./style/reset.css";

function App() {
  return (
    <Body>
      {/* <Father>
        <BoxOne $bgColor="teal">
          <Text>Hello</Text>
        </BoxOne>
        <Circle $bgColor="tomato" />
      </Father>

      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>

      <Input /> */}

      {/* <AnimationBox>
        <Emoji>😁</Emoji>
      </AnimationBox>
      <Emoji>🤣</Emoji> */}

      <Text as="div">Hello Recat World!!</Text>
    </Body>
  );
}

export default App;
