import React from "react";
import { useFormStore } from "../../context/Context";
import FirstForm from "./firstForm/FirstForm";
import "./Forms.css";
import FourthForm from "./fourthForm/FourthForm";
import Result from "./result/Result";
import SecondForm from "./secondForm/SecondForm";
import ThirdForm from "./thirdForm/ThirdForm";

const Forms = () => {
  const [state] = useFormStore();
  const form = () => {
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

  return form();
};

export default Forms;
