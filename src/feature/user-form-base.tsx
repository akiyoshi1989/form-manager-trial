import { useState } from "react";
import InputForm from "./input-form";
import DetailInput from "./detail-input";
import { Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FormValues } from "./Types";

const UserFormBase = () => {
  const [showMainModal, setShowMainModal] = useState(false);
  const [showSubModal, setShowSubModal] = useState(false);
  const handleShowModal = () => {
    setShowMainModal((prev) => !prev);
  };
  const handleShowSubModal = () => {
    setShowSubModal((prev) => !prev);
  };
  const methods = useForm<FormValues>({
    defaultValues: {
      id: "",
      name: "",
      createAt: undefined,
      startDate: undefined,
    },
  });

  return (
    <FormProvider {...methods}>
      <div>
        <Typography component="h1" variant="h1">
          入力フォーム
        </Typography>
        <Button onClick={handleShowModal}>show Modal</Button>
        {showMainModal && (
          <InputForm
            onClick={handleShowModal}
            showModal={showMainModal}
            onClickDetail={handleShowSubModal}
          />
        )}
        {showSubModal && <DetailInput onClick={handleShowSubModal} />}
      </div>
    </FormProvider>
  );
};

export default UserFormBase;
