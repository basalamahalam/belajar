import React, { useEffect, useRef } from "react";
import InputForm from "../Elements/Input";
import { Button } from "../Elements/Button/Button";

const FormRegister = () => {
  const fullnameRef = useRef(null);

  useEffect(() => {
    fullnameRef.current.focus();
  }, []);

  return (
    <form action="">
      <InputForm
        label="Fullname"
        placeholder="John Doe"
        type="fullname"
        name="fullname"
        ref={fullnameRef}
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
