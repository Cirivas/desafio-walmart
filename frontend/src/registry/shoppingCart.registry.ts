import {
  ShoppingCartController,
  useShoppingCartController,
} from "../adapters/shoppingCart/shoppingCart.controller";
import { useShoppingCartRepository } from "../adapters/shoppingCart/shoppingCart.repository";
import {
  ShoppingCartInteractor,
  useShoppingCartInteractor,
} from "../usecase/interactor/shoppingCart.interactor";
import { ShoppingCartRepository } from "../usecase/repository/shoppingCart.repository";

export function GetShoppingCartRegistry(): ShoppingCartController {
  return useShoppingCartController(GetShoppingCartInteractor());
}

function GetShoppingCartInteractor(): ShoppingCartInteractor {
  return useShoppingCartInteractor(GetShoppingCartRepository());
}

function GetShoppingCartRepository(): ShoppingCartRepository {
  return useShoppingCartRepository();
}
