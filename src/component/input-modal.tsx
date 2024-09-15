import { Modal, Paper } from "@mui/material";
import { ReactNode } from "react";

type InputFormProps = {
  showModal: boolean;
  className?: string;
  children: ReactNode;
};
const InputModal: React.FC<InputFormProps> = ({
  showModal,
  className,
  children,
}) => {
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
        {children}
      </Paper>
    </Modal>
  );
};

export default InputModal;
