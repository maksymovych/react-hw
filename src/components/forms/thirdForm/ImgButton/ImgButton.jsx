import React from "react";
import "./ImgButton.css";

const ImgButton = ({ src, alt, ...props }) => {
  const styleButton = {
    width: "100%",
  };
  return (
    <button className="imgButton" {...props}>
      <img style={styleButton} src={src} alt={alt} />
    </button>
  );
};

export default ImgButton;
