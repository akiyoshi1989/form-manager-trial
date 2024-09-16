import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import InputModal from "../component/input-modal";
import { FormValues } from "./Types";

type InputFormProps = {
  onClick: () => void;
  onClickDetail: () => void;
  showModal: boolean;
};

const InputForm: React.FC<InputFormProps> = ({
  onClick,
  showModal,
  onClickDetail,
}) => {
  const { register, handleSubmit } = useFormContext<FormValues>();
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <InputModal showModal={showModal}>
      <Typography>InputForm</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField label="id" {...register("id")} />
        <TextField label="name" {...register("name")} />
        <Box>
          <Button type="button" onClick={onClickDetail}>
            Open Detail
          </Button>
        </Box>
        <TextField label="createAt" {...register("createAt")} />
        <Box>
          <Button type="submit">送信</Button>
          <Button onClick={onClick}>閉じる</Button>
        </Box>
      </Box>
    </InputModal>
  );
};

export default InputForm;
