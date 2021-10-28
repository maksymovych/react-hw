import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";

const Input = forwardRef((props, ref) => (
  <TextField
    fullWidth
    margin="normal"
    variant="outlined"
    inputRef={ref}
    {...props}
  />
));

export default Input;
