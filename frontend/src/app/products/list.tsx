import React, { useEffect, useState } from "react";
import { ProductsController } from "../../adapters/products/products.controller";
import { Product } from "../../domain/product";

export const ProductList = (props: { prodCtrl: ProductsController }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Load products
  useEffect(() => {
    console.log("effect");

    props.prodCtrl
      .getAll()
      .then((result) => {
        setProducts(result);
      })
      .catch(console.error);
  }, [props.prodCtrl]);

  return (
    <div>
      <h1>Productos</h1>
      {products.map((product) => product.brand)}
    </div>
  );
};
