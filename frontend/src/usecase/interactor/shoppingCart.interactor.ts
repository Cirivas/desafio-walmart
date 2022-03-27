import { Product } from "../../domain/product";
import { ShoppingCart } from "../../domain/shopppingCart";
import { ShoppingCartRepository } from "../repository/shoppingCart.repository";

export interface ShoppingCartInteractor {
  addProduct(product: Product): void;
  removeProduct(product: Product): void;
  get(): ShoppingCart;
}

export function useShoppingCartInteractor(
  sr: ShoppingCartRepository
): ShoppingCartInteractor {
  return {
    addProduct: (product: Product) => sr.add(product),
    removeProduct: (product: Product) => sr.remove(product),
    get: () => sr.getShoppingCart(),
  };
}
