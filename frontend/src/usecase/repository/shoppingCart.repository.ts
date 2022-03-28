import { Discount } from "../../domain/discount";
import { Product } from "../../domain/product";
import { ShoppingCart } from "../../domain/shopppingCart";

export interface ShoppingCartRepository {
  add(product: Product): void;
  remove(product: Product): void;
  getShoppingCart(): ShoppingCart;
  addPossibleDiscount(discount: Discount): void;
  setPossibleDiscounts(discounts: Discount[]): void;
  removePossibleDiscount(discount: Discount): void;
  getPossibleDiscounts(): Discount[];
  setUsedDiscount(discount?: Discount): void;
  getUsedDiscount(): Discount | null | undefined;
}
