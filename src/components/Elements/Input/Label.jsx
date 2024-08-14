import React from "react";

const Label = (props) => {
  const { type, children } = props;
  return (
    <label
      htmlFor={type}
      className="block mb-2 text-sm font-bold text-slate-700"
    >
      {children}
    </label>
  );
};

export default Label;
