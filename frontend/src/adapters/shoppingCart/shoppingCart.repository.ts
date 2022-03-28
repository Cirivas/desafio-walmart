import { useState } from "react";
import { Discount } from "../../domain/discount";
import { Product } from "../../domain/product";
import { CartElement, ShoppingCart } from "../../domain/shopppingCart";

export interface ShoppingCartRepository {
  add(product: Product): void;
  remove(product: Product): void;
  getShoppingCart(): ShoppingCart;
  addPossibleDiscount(discount: Discount): void;
  removePossibleDiscount(discount: Discount): void;
  getPossibleDiscounts(): Discount[];
  setUsedDiscount(discount: Discount): void;
  getUsedDiscount(): Discount | null | undefined;
}

export function useShoppingCartRepository(): ShoppingCartRepository {
  const [cart, setCart] = useState<ShoppingCart>({
    products: [],
    possibleDiscounts: [],
  });

  return {
    add: (product: Product) => {
      const { products } = cart;
      console.log("adding new product", cart, product, products);
      const index = products.findIndex(
        (elm: CartElement) => product.id === elm.product.id
      );

      if (index > -1) {
        const existingProduct = products[index];
        existingProduct.quantity = existingProduct.quantity + 1;
        products[index] = existingProduct;
        console.log("product quantity increased", cart);
        setCart((currentCart) => ({
          ...currentCart,
          products,
        }));
        return;
      }

      // product does not exist
      const newElement = {
        product,
        quantity: 1,
      };

      console.log("added new element", [...cart.products, newElement]);

      setCart((currentCart) => ({
        ...currentCart,
        products: [...currentCart.products, newElement],
      }));

      console.log("cart", cart);
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

      setCart((currentCart) => ({
        ...currentCart,
        products,
      }));
      return;
    },
    getShoppingCart: () => cart,

    addPossibleDiscount: (discount: Discount) => {
      // Check if discount doesnt exist first
      const index = cart.possibleDiscounts.findIndex(
        ({ brand }) => discount.brand === brand
      );

      // Discount already exist, dont add it
      if (index > -1) {
        return;
      }

      setCart((currentCart) => ({
        ...currentCart,
        possibleDiscounts: [...currentCart.possibleDiscounts, discount],
      }));
    },

    getPossibleDiscounts: () => cart.possibleDiscounts,

    removePossibleDiscount: (discount: Discount) => {
      console.log("remove possible discount", cart);
      const index = cart.possibleDiscounts.findIndex(
        ({ brand }) => discount.brand === brand
      );
      // Discount doesnt exist
      if (index < 0) {
        return;
      }
      console.log("remove possible discount", index, cart.possibleDiscounts);
      const newPossibleDiscounts = cart.possibleDiscounts;
      newPossibleDiscounts.splice(index, 1);
      setCart((currentCart) => ({
        ...currentCart,
        possibleDiscounts: newPossibleDiscounts,
      }));
    },

    setUsedDiscount: (discount?: Discount) => {
      console.log("set discount", cart);
      setCart((currentCart) => ({
        ...currentCart,
        usedDiscount: discount,
      }));
    },

    getUsedDiscount: () => cart.usedDiscount,
  };
}
