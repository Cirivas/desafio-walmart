import { useState } from "react";
import { Product } from "../../domain/product";
import { CartElement, ShoppingCart } from "../../domain/shopppingCart";

export interface ShoppingCartRepository {
  add(product: Product): void;
  remove(product: Product): void;
  getShoppingCart(): ShoppingCart;
}

export function useShoppingCartRepository() {
  const [cart, setCart] = useState<ShoppingCart>({ products: [] });

  return {
    add: (product: Product) => {
      const { products } = cart;
      const index = products.findIndex(
        (elm: CartElement) => product.id === elm.product.id
      );

      if (index > -1) {
        const existingProduct = products[index];
        existingProduct.quantity = existingProduct.quantity + 1;
        products[index] = existingProduct;
        setCart({ products });
        return;
      }

      // product does not exist
      const newElement = {
        product,
        quantity: 1,
      };

      setCart({ products: [...cart.products, newElement] });
    },
    remove: (product: Product) => {
      const { products } = cart;
      const index = products.findIndex(
        (elm: CartElement) => product.id === elm.product.id
      );

      if (index === -1) {
        throw new Error("Product doesnt exists");
      }

      // there is more than one element
      if (products[index].quantity > 1) {
        products[index].quantity = products[index].quantity - 1;
      } else {
        // if there is just one, remove it
        products.splice(index, 1);
      }

      setCart({ products });
      return;
    },
    getShoppingCart: () => cart,
  };
}
