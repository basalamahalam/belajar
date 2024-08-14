import React from "react";
import { Button } from "../Elements/Button/Button";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col justify-between w-full max-w-sm mx-2 bg-gray-800 border border-gray-600 rounded-lg shadow ">
      {children}
    </div>
  );
};
const Header = (props) => {
  const { img } = props;
  return (
    <a href={img}>
      <img src="/products.jpg" alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};
const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="h-full px-5 pb-5">
      <a href="">
        <h1 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h1>
        <p className="text-sm text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button variant="bg-blue-600">Add to cart</Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
