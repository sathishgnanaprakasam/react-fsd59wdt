import { useLoaderData } from "react-router-dom";
import userServices from "../services/userServices";

export const usrLoader = async ({ params }) => {
    const user = await userServices.getUser(params.id);
    return user;
}

const User = () => {

    const user = useLoaderData();

  return (
      <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
    </div>
  )
}

export default User;