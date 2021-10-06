import React from "react";
import { useFormStore } from "../../../context/Context";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import InputButton from "../../ui/button/InputButton";
import { changeForm, submitForm } from "../../../actions/actions";

const schema = yup
  .object({
    city: yup.string().max(30).min(3).required(),
    street: yup.string().max(30).min(3),
    house: yup.string(),
  })
  .required();

const validation = {
  required: true,
  pattern: /^[A-Za-z]+$/i,
};

const SecondForm = () => {
  const [state, dispatch] = useFormStore();
  console.log(state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(submitForm("secondForm", data));
    dispatch(changeForm(1));
  };

  const previousForm = () => {
    console.log("qw");
    dispatch(changeForm(-1));
  };
  const nextForm = () => {
    dispatch(changeForm(1));
  };

  return (
    <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
      <h2>Fill the address fields</h2>
      <label htmlFor="city">City</label>
      <input {...register("city", validation)} type="address" id="city" />
      {errors.city?.type === "required" && <p>{"City is required"}</p>}
      <label htmlFor="street">Street</label>
      <input {...register("street", validation)} type="address" id="street" />

      <label htmlFor="house">House</label>
      <input {...register("house")} type="address" id="house" />
      {errors.email?.type === "required" && <p>{"Email is required"}</p>}
      <div className="buttonWrapper">
        <InputButton
          onClick={() => previousForm}
          type="submit"
          value="Previous"
        />
        <InputButton onClick={() => nextForm} type="submit" value="Next" />
      </div>
    </form>
  );
};

export default SecondForm;
