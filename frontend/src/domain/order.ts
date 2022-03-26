import { Discount } from "./discount";
import { ShoppingCart } from "./shopppingCart"

export type Order = {
    shoppingCart: ShoppingCart;
    total:  number;
    discountUsed: Discount;
}