import React, { useEffect } from "react";
import { getUserData } from "../../../actions/actions";
import { bearMan } from "../../../avaLinks/avaLinks";
import { useFormStore } from "../../../context/Context";
import ContactItem from "./ContactItem";
// import Swal from "sweetalert2";
// import { useEffect } from "react";

const Result = () => {
  const [state, dispatch] = useFormStore();
  useEffect(() => dispatch(getUserData()), [dispatch]);
  const userData = state.result;
  const userPhoto = state.thirdForm;
  console.log(userData, userPhoto);

  const userInfo = userData.map((item, index) => (
    <ContactItem field={item} key={index} />
  ));
  //   const successAlert = useEffect(() => {
  //     return Swal.fire("Good job!", "You clicked the button!", "success");
  //   }, []);
  return (
    <div className="formWrapper">
      {/* {successAlert} */}
      <h2>Registration succid! Thenk you!</h2>
      <img src={bearMan} alt="" style={{ width: "50%", alignSelf: "center" }} />
      <h3>Contact info:</h3>
      {userInfo}
    </div>
  );
};

export default Result;
