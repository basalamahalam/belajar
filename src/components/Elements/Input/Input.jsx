import React from "react";

const Input = (props) => {
  const { type, placeholder } = props;
  return (
    <input
      type={type}
      className="w-full px-3 py-2 text-sm border rounded opacity-50 text-slate-700 placeholder:"
      placeholder={placeholder}
    />
  );
};

export default Input;
