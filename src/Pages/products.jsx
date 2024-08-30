import React, { useEffect, useState } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";

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

const ProductsPage = () => {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // const handleAddtoCart = (id) => {
  //   if (products.length > 0 && cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([
  //       ...cart,
  //       {
  //         id,
  //         qty: 1,
  //       },
  //     ]);
  //   }
  // };

  return (
    <>
      <div className="flex justify-center p-8">
        <div className="flex flex-wrap w-4/6">
          {products.length > 0 &&
            products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header img={product.image} id={product.id} />
                <CardProducts.Body name={product.title}>
                  {product.description}
                </CardProducts.Body>
                <CardProducts.Footer
                  price={product.price}
                  // handleAddtoCart={handleAddtoCart}
                  id={product.id}
                />
              </CardProducts>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="mb-2 text-3xl font-bold text-blue-600">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
