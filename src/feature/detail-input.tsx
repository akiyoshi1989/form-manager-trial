import React from "react";
import { Box, Button, Typography } from "@mui/material";
import InputModal from "../component/input-modal";
import { useFormContext } from "react-hook-form";
import { FormValues } from "./Types";

type DetailInputProps = {
  onClick: () => void;
};
const DetailInput: React.FC<DetailInputProps> = ({ onClick }) => {
  const { register, handleSubmit } = useFormContext<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    onClick();
  };

  return (
    <InputModal showModal={true}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography>DetailInput</Typography>
        <input {...register("startDate")} />
        <Button type="submit">送信</Button>
        <Button type="button" onClick={onClick}>
          閉じる
        </Button>
      </Box>
    </InputModal>
  );
};

export default DetailInput;
