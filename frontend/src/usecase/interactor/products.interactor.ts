import { Product } from "../../domain/product";
import { ProductsPresenter } from "../presenter/products.presenter";
import { ProductsRepository } from "../repository/products.repository";

export interface ProductInteractor {
  getAll(): Promise<Product[]>;
}

export function newProductInteractor(
  pr: ProductsRepository,
  pp: ProductsPresenter
): ProductInteractor {
  return {
    getAll: () => pr.findAll().then((result) => pp.responseProducts(result)),
  };
}
