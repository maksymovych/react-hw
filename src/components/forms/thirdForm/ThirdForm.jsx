import React from "react";
import { useForm } from "react-hook-form";
import { changeForm, submitForm } from "../../../actions/actions";
import { useFormStore } from "../../../context/Context";
import { imgLinks } from "../../../imgLinks/imgLinks";
import InputButton from "../../ui/button/InputButton";
import ImgButton from "./ImgButton/ImgButton";

const ThirdForm = () => {
  const [, dispatch] = useFormStore();

  const images = imgLinks.map((link) => (
    <ImgButton
      onClick={choosePhoto}
      src={link.src}
      alt={link.title}
      key={link.title}
      type="button"
    />
  ));

  function choosePhoto(e) {
    const chosenPhoto = e.target.src;
    dispatch(submitForm("thirdForm", chosenPhoto));
  }

  function upload(e) {
    console.log(e, "upload");
  }

  function previousForm() {
    dispatch(changeForm(-1));
  }

  const onSubmit = (data) => {
    console.log(data);
    dispatch(changeForm(1));
  };

  const { handleSubmit } = useForm();

  return (
    <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
      <h2>Upload the photo</h2>
      <div className="buttonWrapper">
        <InputButton
          onClick={upload}
          type="button"
          value="Upload Photo"
          readOnly
        />
      </div>
      <div>{images}</div>
      <div className="buttonWrapper">
        <InputButton
          onClick={previousForm}
          type="button"
          value="Previous"
          readOnly
        />
        <InputButton type="submit" value="Next" readOnly />
      </div>
    </form>
  );
};

export default ThirdForm;
