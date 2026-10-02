import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>{users[Number(userId) - 1].name}</h1>
      <hr />
      <Link to="Followers">See Followers</Link>
      <Outlet
        context={{
          name: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
}

export default User;
