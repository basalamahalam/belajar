import React from "react";
import InputForm from "../Elements/Input";
import { Button } from "../Elements/Button/Button";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        placeholder="example@gmail.com"
        type="email"
        name="email"
      />
      <InputForm
        label="Password"
        placeholder="********"
        type="password"
        name="password"
      />
      <Button variant="bg-blue-600">Login</Button>
    </form>
  );
};

export default FormLogin;
