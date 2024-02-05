import React from "react";
import { TextInput } from "react-native";
import { object, string } from "yup";
import { ILoginUser } from "../../Config/interfaces";
import { useLoginHook } from "../../Api/useLogin";

const useLogin = (navigation) => {
  const emailRef = React.useRef<TextInput>(null);
  const passwordRef = React.useRef<TextInput>(null);

  let userSchema = object().shape({
    email: string().email().required("Email is required"),
    password: string().required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const { mutate, isLoading, isSuccess, data, isError } =
    useLoginHook(navigation);

  const onSubmit = (values: ILoginUser) => {
    mutate(values);
  };

  return {
    userSchema,
    initialValues,
    emailRef,
    passwordRef,
    onSubmit,
    isLoading,
    isError,
  };
};

export default useLogin;
