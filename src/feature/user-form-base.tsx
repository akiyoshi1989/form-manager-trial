import { useState } from "react";
import InputForm from "./input-form";
import DetailInput from "./detail-input";
import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FormValues, UserAttribute } from "./Types";

type UserFormBaseProps = {
  userAttribute: UserAttribute;
};
const UserFormBase: React.FC<UserFormBaseProps> = ({ userAttribute }) => {
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
      <Box>
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
        {showSubModal && (
          <DetailInput
            onClick={handleShowSubModal}
            userAttribute={userAttribute}
          />
        )}
      </Box>
    </FormProvider>
  );
};

export default UserFormBase;
