import React, { useCallback, useEffect, useState } from "react";
import { ProductsController } from "../../adapters/products/products.controller";
import { Product } from "../../domain/product";
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

  const handleClick = useCallback((product: Product) => {
    console.log(product.brand);
  }, []);

  const keyExtractor = useCallback((product: Product) => {
    return `${product.id}-${product.brand}-${product.price}`;
  }, []);

  const productRenderer = useCallback(
    (product: Product) => (
      <li>
        {product.brand} {product.price}
      </li>
    ),
    []
  );

  return (
    <div>
      <h1>Productos</h1>
      <List
        itemList={products}
        onClick={handleClick}
        keyExtractor={keyExtractor}
        renderer={productRenderer}
      />
    </div>
  );
};
