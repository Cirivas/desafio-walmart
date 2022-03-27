import { ProductsController } from "./products/products.controller";
import { ShoppingCartController } from "./shoppingCart/shoppingCart.controller";

export interface MainController {
  productsController: ProductsController;
  shoppingCartController: ShoppingCartController;
}

export default {
  productsController: {},
  shoppingCartController: {},
} as MainController;
