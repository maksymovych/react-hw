import React, { useMemo } from "react";
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
    house: yup.string().max(5).required("House is required"),
  })
  .required();

const SecondForm = () => {
  const [state, dispatch] = useFormStore();
  const fields = useMemo(() => state.secondForm, [state]);
  const { city, street, house } = fields;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(submitForm("secondForm", data));
    dispatch(changeForm(1));
  };

  function backToForm() {
    dispatch(submitForm("secondForm", watch()));
    dispatch(changeForm(-1));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Fill the address fields</h2>
      <label htmlFor="city">City</label>
      {!!errors.city && <p className="warning">{"City is required"}</p>}
      <input
        {...register("city")}
        type="address"
        id="city"
        defaultValue={city}
      />
      <label htmlFor="street">Street</label>
      {!!errors?.street && <p className="warning">{errors?.street?.message}</p>}
      <input
        {...register("street")}
        type="address"
        id="street"
        defaultValue={street}
      />

      <label htmlFor="house">House</label>
      {!!errors?.house && <p className="warning">{errors?.house?.message}</p>}
      <input
        {...register("house")}
        type="address"
        id="house"
        defaultValue={house}
      />
      <div className="buttonWrapper">
        <InputButton type="button" value="Previous" onClick={backToForm} />
        <InputButton type="submit" value="Next" />
      </div>
    </form>
  );
};

export default SecondForm;
