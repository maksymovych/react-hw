import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputButton from "../../ui/button/InputButton";
import { useFormStore } from "../../../context/Context";
import { changeForm, submitForm } from "../../../actions/actions";

const schema = yup
  .object({
    name: yup
      .string()
      .max(30)
      .min(2)
      .matches(/^[A-Za-z]+$/i, "Must contain only letters")
      .required("Name is requared"),
    lastName: yup.string().max(30).min(2).required("Last Name is requared"),
    email: yup.string().email().required("Fill email address"),
  })
  .required("All fields must be filled");

const FirstForm = () => {
  const [state, dispatch] = useFormStore();
  const fields = useMemo(() => state.firstForm, [state]);
  const { name, lastName, email } = fields;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(submitForm("firstForm", data));
    dispatch(changeForm(1));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Fill registration form</h2>
      <label htmlFor="name">First Name</label>
      {!!errors?.name && <p className="warning">{errors?.name?.message}</p>}
      <input {...register("name")} type="text" id="name" defaultValue={name} />
      <label htmlFor="lestName">Last Name</label>
      {!!errors?.lastName && (
        <p className="warning">{errors?.lastName?.message}</p>
      )}
      <input
        {...register("lastName")}
        type="text"
        id="lastName"
        defaultValue={lastName}
      />
      <label htmlFor="email">Email</label>
      {!!errors?.email && <p className="warning">{errors?.email?.message}</p>}
      <input
        {...register("email")}
        type="email"
        id="email"
        defaultValue={email}
      />
      <div className="buttonWrapper">
        <InputButton type="submit" value="Next" />
      </div>
    </form>
  );
};

export default FirstForm;
