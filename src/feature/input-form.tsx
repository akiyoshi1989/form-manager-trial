import React from "react";
import { Box, Button, Typography } from "@mui/material";
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
        <input {...register("id")}></input>
        <input {...register("name")}></input>
        <Button type="button" onClick={onClickDetail}>
          Open
        </Button>
        <input {...register("createAt")}></input>
        <Button type="submit">送信</Button>
      </Box>
      <Button onClick={onClick}>閉じる</Button>
    </InputModal>
  );
};

export default InputForm;
