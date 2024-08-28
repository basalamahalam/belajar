import React, { useEffect, useRef } from "react";
import InputForm from "../Elements/Input";
import { Button } from "../Elements/Button/Button";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  };
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        placeholder="example@gmail.com"
        type="email"
        name="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        placeholder="********"
        type="password"
        name="password"
      />
      <Button variant="bg-blue-600" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
