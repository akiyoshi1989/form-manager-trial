import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserFormBase from "../feature/user-form-base";

const UserManager = () => {
  const URL = "http: localhost:3000/users";
  const { data: user } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => axios.get(`${URL}`),
  });
  return (
    <>
      <UserFormBase />
    </>
  );
};

export default UserManager;
