import React, { useState } from "react";
import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import DetailInput from "./detail-input";
import InputModal from "../component/input-modal";

type InputFormProps = {
  onClick: () => void;
  showModal: boolean;
};

type Form = {
  id: string;
  name: string;
  createAt: string;
};
const InputForm: React.FC<InputFormProps> = ({ onClick, showModal }) => {
  const [showSubModal, setShowSubModal] = useState(false);
  const handleShowSubModal = () => {
    setShowSubModal((prev) => !prev);
  };
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "",
      name: "",
      createAt: "",
    },
  });
  const onSubmit = (data: Form) => console.log(data);

  return (
    <InputModal showModal={showModal}>
      <Typography>InputForm</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("id")}></input>
        <input {...register("name")}></input>
        <Button type="button" onClick={handleShowSubModal}>
          Open
        </Button>
        <input {...register("createAt")}></input>
        {showSubModal && <DetailInput onClick={handleShowSubModal} />}
        <Button type="submit">送信</Button>
      </Box>
      <Button onClick={onClick}>閉じる</Button>
    </InputModal>
  );
};

export default InputForm;
