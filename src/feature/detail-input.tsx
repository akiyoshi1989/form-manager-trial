import React from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import InputModal from "../component/input-modal";
import { useFormContext } from "react-hook-form";
import { FormValues, UserAttribute } from "./Types";
import Select from "react-select";

type DetailInputProps = {
  onClick: () => void;
  userAttribute: UserAttribute;
};
const DetailInput: React.FC<DetailInputProps> = ({
  onClick,
  userAttribute,
}) => {
  const { register, handleSubmit } = useFormContext<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    onClick();
  };
  const attributeKeys = userAttribute.map((attribute) => {
    return Object.keys(attribute)[0];
  });

  return (
    <InputModal showModal={true}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography>DetailInput</Typography>
        <Select options={attributeKeys} />
        <Input {...register("startDate")} />
        <Button type="submit">送信</Button>
        <Button type="button" onClick={onClick}>
          閉じる
        </Button>
      </Box>
    </InputModal>
  );
};

export default DetailInput;
