import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
