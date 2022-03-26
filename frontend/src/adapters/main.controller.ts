import { ProductsController } from "./products/products.controller";

export interface MainController {
  productsController?: ProductsController | null;
}

export default {
  productsController: null,
} as MainController;
