import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import App from "./App";
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Coins />,
    children: [],
    errorElement: <NotFound />,
  },
  {
    path: "/:coinId",
    element: <Coin />,
    children: [
      {
        path: "price",
        element: <Price />,
      },
      {
        path: "chart",
        element: <Chart />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
