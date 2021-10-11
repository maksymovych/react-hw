import React, { useMemo } from "react";
import InputButton from "../../ui/button/InputButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useFormStore } from "../../../context/Context";
import { changeForm, submitForm } from "../../../actions/actions";

const schema = yup
  .object({
    password: yup
      .string()
      .max(30)
      .min(4)
      .required("The password is required field"),
  })
  .required();

const FourthForm = () => {
  const [state, dispatch] = useFormStore();
  const fields = useMemo(() => state.fourthForm, [state]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (data.password !== data.confirmpassword)
      return alert("Password mismatch, try again");
    dispatch(submitForm("fourthForm", data));
    dispatch(changeForm(1));
  };

  function previousForm() {
    dispatch(submitForm("fourthForm", watch()));
    dispatch(changeForm(-1));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Confirm the password</h2>
      <label htmlFor="password">Password</label>
      {!!errors?.password && (
        <p className="warning">{errors.password.message}</p>
      )}
      <input
        {...register("password")}
        type="password"
        id="password"
        defaultValue={fields.password}
      />
      <label htmlFor="confirmpassword">Confirm password</label>
      <input
        {...register("confirmpassword")}
        type="password"
        id="confirmpassword"
        defaultValue={fields.password}
      />
      <div className="buttonWrapper">
        <InputButton onClick={previousForm} type="button" value="Previous" />
        <InputButton type="submit" value="Confirm" />
      </div>
    </form>
  );
};

export default FourthForm;
