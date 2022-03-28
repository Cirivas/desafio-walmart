import { MainController } from "../adapters/main.controller";
import { GetDiscountsRegistry } from "./discounts.registry";
import { GetProductRegistry } from "./products.registry";
import { GetShoppingCartRegistry } from "./shoppingCart.registry";

export interface Registry {
  mainController: MainController;
}

export function useRegistry(): Registry {
  const productsController = GetProductRegistry();
  const shoppingCartController = GetShoppingCartRegistry();
  const discountsController = GetDiscountsRegistry();
  return {
    mainController: {
      productsController,
      shoppingCartController,
      discountsController,
    },
  };
}
