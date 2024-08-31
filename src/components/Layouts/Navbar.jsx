import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Button } from "../Elements/Button/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { darkMode, setDarkMode } = useContext(DarkMode);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
      setTotalCart(sum);
    }
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex items-center justify-end h-20 px-10 font-semibold tracking-wide text-white bg-blue-600">
      {username}
      <Button variant="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center p-2 mx-5 bg-gray-800 rounded-md">
        {totalCart}
      </div>
      <Button
        className="px-10 mx-5 text-white bg-black rounded"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light" : "Dark"}{" "}
      </Button>
    </div>
  );
};

export default Navbar;
