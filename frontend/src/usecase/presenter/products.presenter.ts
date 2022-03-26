import { Product } from "../../domain/product";

export interface ProductsPresenter {
  // Used to apply certain transformation to a product list
  responseProducts(p: Product[]): Product[];
}
