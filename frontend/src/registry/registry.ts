import { MainController } from "../adapters/main.controller";
import { GetProductRegistry } from "./products.registry";
import { GetShoppingCartRegistry } from "./shoppingCart.registry";

export interface Registry {
  mainController: MainController;
}

export function useRegistry(): Registry {
  const productsController = GetProductRegistry();
  const shoppingCartController = GetShoppingCartRegistry();
  return {
    mainController: {
      productsController,
      shoppingCartController,
    },
  };
}
