import { Button, Typography } from "@mui/material";
import React from "react";
import InputModal from "../component/input-modal";

type DetailInputProps = {
  onClick: () => void;
};
const DetailInput: React.FC<DetailInputProps> = ({ onClick }) => {
  return (
    <InputModal showModal={true}>
      <Typography>DetailInput</Typography>
      <Button onClick={onClick}>閉じる</Button>
    </InputModal>
  );
};

export default DetailInput;
