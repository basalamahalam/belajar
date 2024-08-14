import React from "react";

export const Button = (props) => {
  const {
    children,
    variant = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-4 font-semibold rounded-md ${variant} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
