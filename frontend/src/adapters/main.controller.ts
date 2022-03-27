import { ProductsController } from "./products/products.controller";

export interface MainController {
  productsController: ProductsController;
}

export default {
  productsController: {},
} as MainController;
