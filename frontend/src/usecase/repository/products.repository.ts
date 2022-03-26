import { Product } from "../../domain/product";

export interface ProductsRepository {
  findAll(): Promise<Product[]>;
}
