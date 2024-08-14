import React from "react";
import { Button } from "../components/Elements/Button/Button";
import CardProducts from "../components/Fragments/CardProducts";

const ProductsPage = () => {
  return (
    <div className="flex justify-center p-8">
      <CardProducts>
        <CardProducts.Header img="/products.jpg" />
        <CardProducts.Body title="Skincare Baru!">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
          magnam, laboriosam neque in similique quas, ducimus ullam dolore nulla
          ab alias consequuntur nesciunt adipisci facere.
        </CardProducts.Body>
        <CardProducts.Footer price="Rp. 1.000.000,-" />
      </CardProducts>
      <CardProducts>
        <CardProducts.Header img="/products.jpg" />
        <CardProducts.Body title="Skincare Baru!">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
          magnam, laboriosam neque in similique quas, ducimus ullam dolore nulla
          ab alias consequuntur nesciunt adipisci facere.
        </CardProducts.Body>
        <CardProducts.Footer price="Rp. 1.000.000,-" />
      </CardProducts>
    </div>
  );
};

export default ProductsPage;
