import React from "react";
import Typography from "@mui/material/Typography";
import Input from "../ui/Input/Input";
import { useForm } from "react-hook-form";
import { FormLabel } from "@mui/material";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "../ui/CustomButton/CustomButton";

const schema = yup.object({
  firstName: yup.string().required("First Name is required").min(2).max(20),
  lastdName: yup.string().required("Last Name is required").min(2).max(20),
});

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  return (
    <form sx={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <Typography align="center" variant="h4">
        Registration user
      </Typography>
      <FormLabel>Registration user</FormLabel>
      <Input
        {...register("firstName")}
        label="Firts Name"
        error={!!errors?.firstName}
        helperText={errors?.firstName?.message}
      />
      <Input
        {...register("lastName")}
        defaultValue="111"
        name="lastName"
        error={!!errors.lastName}
        helperText={errors?.lastName?.message}
        type="text"
        id="lastName"
      />
      <CustomButton type="submit" size="larg">
        blabla
      </CustomButton>
    </form>
  );
}

export default RegistrationForm;
