import { useState } from "react";
import "./style/style";
import "./style/reset.css";
import { Container, H1 } from "./style/style";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  // const [value, setValue] = useState("");
  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.currentTarget.value);
  // };
  // const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(value);
  // };

  return (
    // <Container>
    //   <H1>Hello React World!!</H1>
    // </Container>

    // <div>
    //   <form onSubmit={onSubmit}>
    //     <input
    //       type="text"
    //       placeholder="userName"
    //       value={value}
    //       onChange={onChange}
    //     />
    //     <button>Log In</button>
    //   </form>
    // </div>
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
