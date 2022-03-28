import React, { useCallback, useEffect, useState } from "react";
import { ProductsController } from "../../adapters/products/products.controller";
import { ShoppingCartController } from "../../adapters/shoppingCart/shoppingCart.controller";
import { Product } from "../../domain/product";
import { List } from "../ui-components/list/list";
import "./list.css";
type ProductListProps = {
  prodCtrl: ProductsController;
  shoppingCartCtrl: ShoppingCartController;
};

export const ProductList = ({
  prodCtrl,
  shoppingCartCtrl,
}: ProductListProps) => {
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

  const handleClickMore = useCallback(
    (product: Product) => {
      shoppingCartCtrl.addProduct(product);
    },
    [shoppingCartCtrl]
  );

  const keyExtractor = useCallback((product: Product) => {
    return `${product.id}-${product.brand}-${product.price}`;
  }, []);

  return (
    <div className="list-container">
      <h1>Productos</h1>
      <List
        itemList={products}
        onClickMore={handleClickMore}
        keyExtractor={keyExtractor}
      />
    </div>
  );
};
