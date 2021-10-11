import React, { useEffect } from "react";
import { getUserData } from "../../../actions/actions";
import { useFormStore } from "../../../context/Context";
import ContactItem from "./ContactItem";
import Swal from "sweetalert2";

const Result = () => {
  const [state, dispatch] = useFormStore();
  useEffect(() => dispatch(getUserData()), [dispatch]);
  const userData = state.result;

  const userPhoto = state.thirdForm;

  const userInfo = userData.map((item, index) => (
    <ContactItem field={item} key={index} />
  ));
  const successAlert = useEffect(() => {
    return Swal.fire("Thank you!", "Successfuly registered!", "success");
  }, []);
  return (
    <>
      {successAlert}
      <h2>Registration succid! Thank you!</h2>
      <img
        src={userPhoto}
        alt={userData[0]?.value || "Avatar"}
        style={{ width: "50%", alignSelf: "center" }}
      />
      <h3>Contact info:</h3>
      {userInfo}
    </>
  );
};

export default Result;
