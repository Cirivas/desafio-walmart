import { Product } from "../../domain/product";
import { ShoppingCart } from "../../domain/shopppingCart";
import { ShoppingCartInteractor } from "../../usecase/interactor/shoppingCart.interactor";

export interface ShoppingCartController {
  addProduct(product: Product): void;
  removeProduct(product: Product): void;
  getCart(): ShoppingCart;
}

export function useShoppingCartController(
  shoppingCartInteractor: ShoppingCartInteractor
): ShoppingCartController {
  return {
    addProduct: (product: Product) =>
      shoppingCartInteractor.addProduct(product),
    removeProduct: (product: Product) =>
      shoppingCartInteractor.removeProduct(product),
    getCart: () => shoppingCartInteractor.get(),
  };
}
