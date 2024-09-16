import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserFormBase from "../feature/user-form-base";

const UserManager = () => {
  const URL = "http://localhost:3000";
  const { data: user } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => axios.get(`${URL}/users`),
  });
  const { data: userAttribute } = useQuery({
    queryKey: ["getUUserAttribute"],
    queryFn: () => axios.get(`${URL}/items`),
    select(response) {
      return response.data;
    },
  });
  return <>{userAttribute && <UserFormBase userAttribute={userAttribute} />}</>;
};

export default UserManager;
