import React from "react";
import { useFormStore } from "../../context/Context";
import Switcher from "../ui/switcher/Switcher";
import FirstForm from "./firstForm/FirstForm";
import "./Forms.css";
import FourthForm from "./fourthForm/FourthForm";
import Result from "./result/Result";
import SecondForm from "./secondForm/SecondForm";
import ThirdForm from "./thirdForm/ThirdForm";

const Forms = () => {
  const [state] = useFormStore();
  const Form = () => {
    switch (state.step) {
      case 1:
        return <FirstForm />;
      case 2:
        return <SecondForm />;
      case 3:
        return <ThirdForm />;
      case 4:
        return <FourthForm />;
      case 5:
        return <Result />;
      default:
        return <FirstForm />;
    }
  };

  let styleForm = ["formWrapper"];
  if (state.isDarkMode) {
    styleForm = [...styleForm, "darkFormWrapper"];
  }

  return (
    <div className={styleForm.join(" ")}>
      {state.step < 5 && <Switcher />}
      <Form />
    </div>
  );
};

export default Forms;
