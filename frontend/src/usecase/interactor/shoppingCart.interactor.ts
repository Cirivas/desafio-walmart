import { Product } from "../../domain/product";
import { ShoppingCart } from "../../domain/shopppingCart";
import { ShoppingCartRepository } from "../repository/shoppingCart.repository";

export interface ShoppingCartInteractor {
  addProduct(product: Product): void;
  removeProduct(product: Product): void;
  get(): ShoppingCart;
}

export function useShoppingCartInteractor(
  shoppingCartRepository: ShoppingCartRepository
): ShoppingCartInteractor {
  return {
    addProduct: (product: Product) => shoppingCartRepository.add(product),
    removeProduct: (product: Product) => shoppingCartRepository.remove(product),
    get: () => shoppingCartRepository.getShoppingCart(),
  };
}
