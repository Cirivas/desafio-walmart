import React, { useCallback, useEffect, useState } from "react";
import { ProductsController } from "../../adapters/products/products.controller";
import { Product } from "../../domain/product";
import { Item } from "../ui-components/list/item";
import { List } from "../ui-components/list/list";

type ProductListProps = {
  prodCtrl: ProductsController;
};

export const ProductList = ({ prodCtrl }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Load products
  useEffect(() => {
    prodCtrl
      .getAll()
      .then((result) => {
        if (result) {
          setProducts(result);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [prodCtrl]);

  const handleClick = useCallback((item: Item) => {
    const product = item as Product;
    console.log(product.brand);
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <List itemList={products} onClick={handleClick} />
    </div>
  );
};
