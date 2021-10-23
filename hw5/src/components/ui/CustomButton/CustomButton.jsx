import React from "react";
import Button from "@mui/material/Button";

const styles = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 1,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "black",
  height: 48,
  padding: "0 30px",
};

function CustomButton({ children, ...props }) {
  return (
    <Button
      sx={styles}
      margin="auto"
      variant="outlined"
      size="large"
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
