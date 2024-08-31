import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${
        darkMode && "bg-slate-800"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute p-2 text-white bg-blue-600 rounded right-2 top-2"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
        <h1 className="mb-2 text-3xl font-bold text-blue-600">{title}</h1>
        <p className="mb-8 font-medium texts-slate-800">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="mt-5 text-sm text-center">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}

          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Sign Up
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
