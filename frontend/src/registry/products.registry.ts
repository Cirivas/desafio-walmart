import {
  ProductsController,
  useProductsController,
} from "../adapters/products/products.controller";
import { useProductPresenter } from "../adapters/products/products.presenter";
import { useProductsRepository } from "../adapters/products/products.repository";
import {
  ProductInteractor,
  useProductInteractor,
} from "../usecase/interactor/products.interactor";
import { ProductsPresenter } from "../usecase/presenter/products.presenter";
import { ProductsRepository } from "../usecase/repository/products.repository";

export function GetProductRegistry(): ProductsController {
  return useProductsController(GetProductInteractor());
}

function GetProductInteractor(): ProductInteractor {
  return useProductInteractor(GetProductsRepository(), GetProductPresenter());
}

function GetProductsRepository(): ProductsRepository {
  return useProductsRepository();
}

function GetProductPresenter(): ProductsPresenter {
  return useProductPresenter();
}
