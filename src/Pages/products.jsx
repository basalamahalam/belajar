import React, { useEffect, useState, useRef } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import { Button } from "../components/Elements/Button/Button";
import getProducts from "../services/products.service";

// const products = [
//   {
//     id: 1,
//     name: "Skincare Baru",
//     price: 1000000,
//     image: "/products.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
// magnam, laboriosam neque in similique quas, ducimus ullam dolore nulla
// ab alias consequuntur nesciunt adipisci facere.`,
//   },
//   {
//     id: 2,
//     name: "Skincare Lama",
//     price: 800000,
//     image: "/products.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
// magnam, laboriosam neque in similique quas.`,
//   },
//   {
//     id: 3,
//     name: "Skincare Satuan",
//     price: 500000,
//     image: "/products.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
// magnam`,
//   },
//   {
//     id: 4,
//     name: "Skincare Baru",
//     price: 1000000,
//     image: "/products.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,`,
//   },
// ];

const email = localStorage.getItem("email");
const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState({});

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddtoCart = (id) => {
    if (products.length > 0 && cart.find((item) => item.id === id)) {
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

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

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
          {products.length > 0 &&
            products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header img={product.image} />
                <CardProducts.Body name={product.title}>
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
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (products) => products.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 20)}...</td>
                      <td>
                        {product.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {(product.price * item.qty).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {" "}
                    {totalPrice.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
