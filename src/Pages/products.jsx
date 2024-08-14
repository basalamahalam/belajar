import React from "react";
import CardProducts from "../components/Fragments/CardProducts";

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
    price: "Rp. 100.000,-",
    image: "/products.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
magnam, laboriosam neque in similique quas.`,
  },
];
const ProductsPage = () => {
  return (
    <div className="flex justify-center p-8">
      {products.map((product) => (
        <CardProducts>
          <CardProducts.Header img={product.image} />
          <CardProducts.Body name={product.name}>
            {product.description}
          </CardProducts.Body>
          <CardProducts.Footer price={product.price} />
        </CardProducts>
      ))}
    </div>
  );
};

export default ProductsPage;
