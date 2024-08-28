import React, { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input";
import { Button } from "../Elements/Button/Button";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        placeholder="John Doe"
        type="text"
        name="username"
        ref={usernameRef}
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
      {loginFailed && (
        <p className="mt-5 text-center text-red-500">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
