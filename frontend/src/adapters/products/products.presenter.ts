import { Product } from "../../domain/product";

export interface ProductsPresenter {
  responseProducts: (p: Product[]) => Product[];
}

export function useProductPresenter(): ProductsPresenter {
  return {
    responseProducts: (p: Product[]) => p,
  };
}
