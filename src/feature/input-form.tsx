import React from "react";
import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "",
      name: "",
      createAt: "",
    },
  });
  const onSubmit = (data: Form) => console.log(data);

  return (
    <Modal
      open={showModal}
      sx={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Paper
        sx={{
          height: "100%",
          textAlign: "center",
        }}
      >
        <Typography>InputForm</Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("id")}></input>
          <input {...register("name")}></input>
          <input {...register("createAt")}></input>
          <Button type="submit">送信</Button>
        </Box>
        <Button onClick={onClick}>閉じる</Button>
      </Paper>
    </Modal>
  );
};

export default InputForm;
