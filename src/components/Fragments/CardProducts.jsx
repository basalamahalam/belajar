import React from "react";
import { Button } from "../Elements/Button/Button";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col justify-between w-full max-w-xs mx-2 my-2 bg-gray-800 border border-gray-600 rounded-lg shadow">
      {children}
    </div>
  );
};
const Header = (props) => {
  const { img } = props;
  return (
    <a href={img}>
      <img
        src={img}
        alt="product"
        className="object-cover w-full p-8 rounded-t-lg h-60"
      />
    </a>
  );
};
const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="h-full px-5 pb-5">
      <a href="">
        <h1 className="text-xl font-semibold tracking-tight text-white ">
          {name.substring(0, 20)} ...
        </h1>
        <p className="text-sm text-white">{children.substring(0, 100)} ...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddtoCart, id } = props;

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </span>
      <Button variant="bg-blue-600" onClick={() => handleAddtoCart(id)}>
        Add to cart
      </Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
