import React, { useEffect, useMemo } from "react";
import { useFormStore } from "../../../context/Context";
import ContactItem from "./ContactItem";
import Swal from "sweetalert2";

const Result = () => {
  const [state] = useFormStore();

  const userData = state.result;

  const userPhoto = state.thirdForm;

  const userInfo = useMemo(
    () =>
      userData.map((item, index) => <ContactItem field={item} key={index} />),
    [userData]
  );
  useEffect(() => {
    return Swal.fire("Thank you!", "Successfuly registered!", "success");
  }, []);
  return (
    <>
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
