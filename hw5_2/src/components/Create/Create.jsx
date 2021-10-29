import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "../ui/CustomButton/CustomButton";
import Input from "../ui/Input/Input";
import { schemaText } from "../../utils/validations";
import { useForm } from "react-hook-form";
import { createContest } from "../../actions";
import { styleModal, stylesCreate } from "../../assets";

function CreateContest() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schemaText) });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createContest({ ...data, competitionId: uuidv4().split("-")[0] }));
    reset();
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h6" sx={{ ...stylesCreate }} onClick={handleOpen}>
        Create contest
      </Typography>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={{ ...styleModal }}>
          <Typography align="center" variant="h6" component="h2">
            Create contest
          </Typography>
          <form
            noValidate
            sx={{ width: "100%" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              {...register("name")}
              type="text"
              label="Enetr contest name"
              error={!!errors?.name}
            />
            <CustomButton fullWidth type="submit">
              Create
            </CustomButton>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateContest;
