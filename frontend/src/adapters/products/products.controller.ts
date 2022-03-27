import { Product } from "../../domain/product";
import { ProductInteractor } from "../../usecase/interactor/products.interactor";

export interface ProductsController {
  getAll: () => Promise<Product[]>;
}

// comment
export function useProductsController(
  productInteractor: ProductInteractor
): ProductsController {
  return {
    getAll: () => productInteractor.getAll(),
  };
}
