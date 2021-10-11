import React from "react";
import Switch from "react-switch";
import { darkMode } from "../../../actions/actions";
import { useFormStore } from "../../../context/Context";

const Switcher = ({ ...props }) => {
  const [state, dispatch] = useFormStore();
  const isDark = state.isDarkMode ? "Dark mode" : "Light mode";
  const styleSwitcher = {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  };
  const styleTitle = {
    paddingRight: "10px",
  };
  const changeToggler = () => {
    dispatch(darkMode());
  };
  return (
    <>
      <label style={styleSwitcher} htmlFor="material-switch">
        <span style={styleTitle}>{isDark} </span>
        <Switch
          checked={state.isDarkMode}
          onChange={changeToggler}
          onColor="#A9A9A9"
          onHandleColor="#646464"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
      </label>
    </>
  );
};

export default Switcher;
