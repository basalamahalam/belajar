import React, { useState } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import { Button } from "../components/Elements/Button/Button";

const products = [
  {
    id: 1,
    name: "Skincare Baru",
    price: 1000000,
    image: "/products.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
magnam, laboriosam neque in similique quas, ducimus ullam dolore nulla
ab alias consequuntur nesciunt adipisci facere.`,
  },
  {
    id: 2,
    name: "Skincare Lama",
    price: 800000,
    image: "/products.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
magnam, laboriosam neque in similique quas.`,
  },
  {
    id: 3,
    name: "Skincare Satuan",
    price: 500000,
    image: "/products.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
magnam`,
  },
  {
    id: 4,
    name: "Skincare Baru",
    price: 1000000,
    image: "/products.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,`,
  },
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddtoCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
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
        <div className="flex flex-wrap w-4/6">
          {products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header img={product.image} />
              <CardProducts.Body name={product.name}>
                {product.description}
              </CardProducts.Body>
              <CardProducts.Footer
                price={product.price}
                handleAddtoCart={handleAddtoCart}
                id={product.id}
              />
            </CardProducts>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="mb-2 text-3xl font-bold text-blue-600">Cart</h1>
          <table className="w-full text-left table-auto broder-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (products) => products.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
