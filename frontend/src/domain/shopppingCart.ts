import { Discount } from "./discount";
import { Product } from "./product";

export type CartElement = {
  product: Product;
  quantity: number;
};

export type ShoppingCart = {
  products: CartElement[];
  possibleDiscounts: Discount[];
  usedDiscount?: Discount;
};
