import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputButton from "../../ui/button/InputButton";
import { useFormStore } from "../../../context/Context";
import { changeForm, submitForm } from "../../../actions/actions";

const schema = yup
  .object({
    name: yup.string().max(30).min(2),
    lastName: yup.string().max(30).min(2),
    email: yup.string().email().required(),
  })
  .required();

const validation = {
  required: true,
  pattern: /^[A-Za-z]+$/i,
};

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
    <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
      <h2>Fill registration form</h2>
      <label htmlFor="name">First Name</label>
      <input
        {...register("name", validation)}
        type="text"
        id="name"
        defaultValue={name}
      />
      <label htmlFor="lestName">Last Name</label>
      <input
        {...register("lastName", validation)}
        type="text"
        id="lastName"
        defaultValue={lastName}
      />
      {errors.name?.type === "required" && <p>{"First name is required"}</p>}

      <label htmlFor="email">Email</label>
      <input
        {...register("email")}
        type="email"
        id="email"
        defaultValue={email}
      />
      {errors.email?.type === "required" && <p>{"Email is required"}</p>}
      <div className="buttonWrapper">
        <InputButton type="submit" value="Next" />
      </div>
    </form>
  );
};

export default FirstForm;
