import * as yup from "yup";

export const schema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
});

export const schemaText = yup.object({
  name: yup.string().required("Please enter contest name").min(2).max(50),
});
