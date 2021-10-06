import React from "react";

const ContactItem = (props) => {
  return (
    <p>
      {props.field.title}: {props.field.value}
    </p>
  );
};

export default ContactItem;
