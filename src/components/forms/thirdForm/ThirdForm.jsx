import React from "react";
import { useForm } from "react-hook-form";
import { changeForm, submitForm } from "../../../actions/actions";
import { useFormStore } from "../../../context/Context";
import InputButton from "../../ui/button/InputButton";

const ThirdForm = () => {
  const [, dispatch] = useFormStore();
  function upload(e) {
    console.log(e, "upload");
  }

  function previousForm(e) {
    console.log(e, "previousForm");
  }

  function nextForm(e) {
    console.log(e, "next");
  }

  const onSubmit = (data) => {
    dispatch(submitForm("thirddForm", data));
    dispatch(changeForm(1));
  };

  const { handleSubmit } = useForm();

  return (
    <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
      <h2>Upload the photo</h2>
      <div className="buttonWrapper">
        <InputButton onClick={upload} value="Upload Photo" readOnly />
      </div>
      <div>Some avatars</div>
      <div className="buttonWrapper">
        <InputButton
          onClick={previousForm}
          type="submit"
          value="Previous"
          readOnly
        />
        <InputButton onClick={nextForm} type="submit" value="Next" readOnly />
      </div>
    </form>
  );
};

export default ThirdForm;
