import React from "react";
import CardProducts from "../components/Fragments/CardProducts";
import { Button } from "../components/Elements/Button/Button";

const products = [
  {
    id: 1,
    name: "Skincare Baru",
    price: "Rp. 1.000.000,-",
    image: "/products.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
magnam, laboriosam neque in similique quas, ducimus ullam dolore nulla
ab alias consequuntur nesciunt adipisci facere.`,
  },
  {
    id: 2,
    name: "Skincare Lama",
    price: "Rp. 800.000,-",
    image: "/products.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
magnam, laboriosam neque in similique quas.`,
  },
  {
    id: 3,
    name: "Skincare Satuan",
    price: "Rp. 500.000,-",
    image: "/products.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
magnam`,
  },
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex items-center justify-end h-20 px-10 font-semibold tracking-wide text-white bg-blue-600">
        {email}
        <Button variant="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center p-8">
        {products.map((product) => (
          <CardProducts key={product.id}>
            <CardProducts.Header img={product.image} />
            <CardProducts.Body name={product.name}>
              {product.description}
            </CardProducts.Body>
            <CardProducts.Footer price={product.price} />
          </CardProducts>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
