import { Product } from "../../../domain/product";
import { ProductsPresenter } from "../products.presenter";

export default {
        responseProducts: (p: Product[]) => p
} as ProductsPresenter;
