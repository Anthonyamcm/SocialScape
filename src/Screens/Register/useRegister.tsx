import React from "react";
import { TextInput } from "react-native";
import { object, string } from "yup";
import { IRegisterUser } from "../../Utils/interfaces";
import { useRegisterHook } from "../../Api/useRegister";

const useRegister = (navigation: any) => {
  const firstNameRef = React.useRef<TextInput>(null);
  const lastNameRef = React.useRef<TextInput>(null);
  const emailRef = React.useRef<TextInput>(null);
  const passwordRef = React.useRef<TextInput>(null);

  let userSchema = object().shape({
    first_name: string().required("First Name is required"),
    last_name: string().required("Last Name is required"),
    email: string().email().required("Email is required"),
    password: string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Minimum 8 characters with at least one uppercase, one lowercase letter, and one digit."
      )
      .required("Password is required"),
  });

  const { mutate, isLoading, isSuccess, data } = useRegisterHook(navigation);

  const onSubmit = (values: IRegisterUser) => {
    mutate(values);
  };

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  return {
    userSchema,
    initialValues,
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    onSubmit,
    isLoading,
  };
};

export default useRegister;
