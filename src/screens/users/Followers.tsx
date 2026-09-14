import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  name: string;
}

function Followers() {
  const { name } = useOutletContext<FollowersContext>();
  return <h1>Here are {name}의 Followers</h1>;
}
export default Followers;
