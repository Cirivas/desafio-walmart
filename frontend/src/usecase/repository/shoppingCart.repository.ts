import { Product } from "../../domain/product";
import { ShoppingCart } from "../../domain/shopppingCart";

export interface ShoppingCartRepository {
  add(product: Product): void;
  remove(product: Product): void;
  getShoppingCart(): ShoppingCart;
}
