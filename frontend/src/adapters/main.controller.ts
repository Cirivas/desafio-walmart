import { DiscountsController } from "./discounts/discounts.controller";
import { ProductsController } from "./products/products.controller";
import { ShoppingCartController } from "./shoppingCart/shoppingCart.controller";

export interface MainController {
  productsController: ProductsController;
  shoppingCartController: ShoppingCartController;
  discountsController: DiscountsController;
}

export default {
  productsController: {},
  shoppingCartController: {},
  discountsController: {},
} as MainController;
