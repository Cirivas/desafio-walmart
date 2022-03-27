import { Product } from "../../domain/product";
import { ShoppingCart } from "../../domain/shopppingCart";
import { ShoppingCartInteractor } from "../../usecase/interactor/shoppingCart.interactor";

export interface ShoppingCartController {
  addProduct(product: Product): void;
  removeProduct(product: Product): void;
  getCart(): ShoppingCart;
}

export function useShoppingCartController(
  sci: ShoppingCartInteractor
): ShoppingCartController {
  return {
    addProduct: (product: Product) => sci.addProduct(product),
    removeProduct: (product: Product) => sci.removeProduct(product),
    getCart: () => sci.get(),
  };
}
