import React, { useMemo } from "react";
import InputButton from "../../ui/button/InputButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useFormStore } from "../../../context/Context";
import { changeForm, submitForm } from "../../../actions/actions";

const schema = yup
  .object({
    password: yup.string().max(30).min(4).required(),
  })
  .required();

const FourthForm = () => {
  const [state, dispatch] = useFormStore();
  const fields = useMemo(() => state.fourthForm, [state]);
  const { password, confirmPassword } = fields;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(4, data);
    dispatch(submitForm("fourthForm", data));
    dispatch(changeForm(1));
  };

  function previousForm(e) {
    console.log(e, "previousForm");
  }

  function nextForm(e) {
    console.log(e, "next");
  }

  return (
    <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
      <h2>Confirm the password</h2>
      <label htmlFor="password">Password</label>
      <input
        {...register("password")}
        type="password"
        id="password"
        defaultValue={password}
      />
      {errors.password?.type === "required" && <p>{"password is required"}</p>}
      <label htmlFor="confirmpassword">Confirm password</label>
      <input
        {...register("confirmpassword")}
        type="password"
        id="confirmpassword"
        defaultValue={confirmPassword}
      />
      <div className="buttonWrapper">
        <InputButton onClick={previousForm} type="submit" value="Previous" />
        <InputButton onClick={nextForm} type="submit" value="Confirm" />
      </div>
    </form>
  );
};

export default FourthForm;
