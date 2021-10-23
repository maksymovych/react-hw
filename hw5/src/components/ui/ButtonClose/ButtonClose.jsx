import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ButtonClose({ children, ...props }) {
  return (
    <IconButton
      edge="end"
      aria-label="comments"
      sx={{ float: "right", opacity: 0, color: "darckgrey" }}
      {...props}
    >
      {children}
      <CloseIcon />
    </IconButton>
  );
}

export default ButtonClose;
