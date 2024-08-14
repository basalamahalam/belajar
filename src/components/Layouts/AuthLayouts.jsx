import React from "react";

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="mb-2 text-3xl font-bold text-blue-400">{title}</h1>
        <p className="mb-8 font-medium texts-slate-800">
          Welcome, Please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
