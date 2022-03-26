import { Product } from "../../domain/product";
import { ProductInteractor } from "../../usecase/interactor/products.interactor";

export interface ProductsController {
  getAll: () => Promise<Product[]>;
}

// comment
export function useProductsController(
  pi: ProductInteractor
): ProductsController {
  return {
    getAll: () => pi.getAll(),
  };
}
