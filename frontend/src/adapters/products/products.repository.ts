import { Product } from "../../domain/product";
import api, { endpoints } from "../../infrastructure/api";

export interface ProductsRepository {
  findAll(): Promise<Product[]>;
}

// Actual implementation of a ProductRepository
export function useProductsRepository(): ProductsRepository {
  return {
    // todo: add fail case
    findAll: () =>
      api.request<Product[]>(endpoints.products.list).then((r) => r.data),
  };
}
