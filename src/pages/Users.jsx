import { Link, useLoaderData } from "react-router-dom";
import userServices from "../services/userServices";

export const userLoader = async () => {
    const users = await userServices.getUsers();
    return users;
}

const Users = () => {

    const users = useLoaderData();

  return (
      <div>
          <ul>
              {
                  users.map(user => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </li>
                  ))
              }
          </ul>
    </div>
  )
}

export default Users;