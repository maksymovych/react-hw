import React from "react";
import s from "./InputButton.module.css";

function InputButton({ ...props }) {
  return <input className={s.button} {...props} />;
}

export default InputButton;
