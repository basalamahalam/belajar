import React from "react";
import InputForm from "../Elements/Input";
import { Button } from "../Elements/Button/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        placeholder="John Doe"
        type="fullname"
        name="fullname"
      />
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
      <InputForm
        label="Confirm Password"
        placeholder="********"
        type="password"
        name="confirmPassword"
      />
      <Button variant="bg-blue-400">Register</Button>
    </form>
  );
};

export default FormRegister;
