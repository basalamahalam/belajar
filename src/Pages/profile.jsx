import React from "react";
import { useLogin } from "../hooks/useLogin";

const profile = () => {
  const username = useLogin();

  return <div>{username}</div>;
};

export default profile;
