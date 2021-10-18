import React from "react";
import Button from "../ui/Button/Button";

export default function Square({ value, onClick }) {
  const classes = ["btn"];

  if (value) {
    classes.push("disabled");
  }

  return (
    <Button className={classes.join(" ")} onClick={onClick} disabled={value}>
      {value}
    </Button>
  );
}
