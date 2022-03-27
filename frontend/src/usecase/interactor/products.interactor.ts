import { Product } from "../../domain/product";
import { ProductsPresenter } from "../presenter/products.presenter";
import { ProductsRepository } from "../repository/products.repository";

export interface ProductInteractor {
  getAll(): Promise<Product[]>;
}

export function useProductInteractor(
  productsRepository: ProductsRepository,
  productsPresenter: ProductsPresenter
): ProductInteractor {
  return {
    getAll: () =>
      productsRepository
        .findAll()
        .then((result) => productsPresenter.responseProducts(result)),
  };
}
