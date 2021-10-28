import React from "react";
import Typography from "@mui/material/Typography";
import Input from "../ui/Input/Input";
import { useForm } from "react-hook-form";
import { Container, FormLabel } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "../ui/CustomButton/CustomButton";
import { schema } from "../../utils/validations";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registrNewUser } from "../../actions";
import { v4 as uuidv4 } from "uuid";
import { stylesContainer } from "../../assets/stulesContainer";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });
  const dispatch = useDispatch();

  const { fieldData } = useSelector((state) => state.registration);

  const onSubmit = (data) => {
    dispatch(registrNewUser({ ...data, id: uuidv4().split("-")[0] }));
    reset();
  };
  const fields = fieldData.inputs.map(({ registr, label, input }, i) => {
    return (
      <div key={i}>
        <FormLabel>{label}</FormLabel>
        <Input
          {...register(registr)}
          label={input}
          error={!!errors?.[registr]}
        />
      </div>
    );
  });
  const { lastName, firstName } = watch();
  const isSHowButton = !!lastName && !!firstName;

  const styles = {
    p: "30px",
  };
  return (
    <Container sx={{ ...stylesContainer, ...styles }}>
      <form noValidate sx={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Typography align="center" variant="h5" sx={{ p: "10px" }}>
          {fieldData.title}
        </Typography>
        {fields}
        {isSHowButton && (
          <CustomButton fullWidth type="submit">
            {fieldData.button}
          </CustomButton>
        )}
      </form>
    </Container>
  );
}

export default RegistrationForm;
