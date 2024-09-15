import { Button } from "@mui/material";
import InputForm from "../feature/input-form";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UserManager = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleShowModal = () => {
    setIsOpenModal((prev) => !prev);
  };
  const URL = "http: localhost:3000/users";
  const { data: user } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => axios.get(`${URL}`),
  });
  return (
    <>
      <Button onClick={handleShowModal}>show Modal</Button>
      {isOpenModal && (
        <>
          <InputForm onClick={handleShowModal} showModal={isOpenModal} />
        </>
      )}
    </>
  );
};

export default UserManager;
