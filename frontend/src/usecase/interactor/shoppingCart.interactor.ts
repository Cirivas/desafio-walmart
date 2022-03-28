import { Discount } from "../../domain/discount";
import { Product } from "../../domain/product";
import { ShoppingCart } from "../../domain/shopppingCart";
import { ShoppingCartRepository } from "../repository/shoppingCart.repository";

export interface ShoppingCartInteractor {
  addProduct(product: Product): void;
  removeProduct(product: Product): void;
  get(): ShoppingCart;
  addPossibleDiscount(discount: Discount): void;
  setPossibleDiscounts(discounts: Discount[]): void;
  removePossibleDiscount(discount: Discount): void;
  getPossibleDiscounts(): Discount[];
  setUsedDiscount(discount?: Discount): void;
  getUsedDiscount(): Discount | null | undefined;
}

export function useShoppingCartInteractor(
  shoppingCartRepository: ShoppingCartRepository
): ShoppingCartInteractor {
  return {
    addProduct: (product: Product) => shoppingCartRepository.add(product),
    removeProduct: (product: Product) => shoppingCartRepository.remove(product),
    get: () => shoppingCartRepository.getShoppingCart(),
    addPossibleDiscount: (discount: Discount) =>
      shoppingCartRepository.addPossibleDiscount(discount),
    setPossibleDiscounts: (discounts: Discount[]) => {
      shoppingCartRepository.setPossibleDiscounts(discounts);
    },
    removePossibleDiscount: (discount: Discount) =>
      shoppingCartRepository.removePossibleDiscount(discount),
    getPossibleDiscounts: () => shoppingCartRepository.getPossibleDiscounts(),
    setUsedDiscount: (discount?: Discount) =>
      shoppingCartRepository.setUsedDiscount(discount),
    getUsedDiscount: () => shoppingCartRepository.getUsedDiscount(),
  };
}
