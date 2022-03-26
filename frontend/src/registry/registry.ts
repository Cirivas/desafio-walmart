import { MainController } from "../adapters/main.controller";
import { GetProductRegistry } from "./products.registry";

export interface Registry {
  mainController: MainController;
}

export function useRegistry(): Registry {
  const productsController = GetProductRegistry();
  return {
    mainController: {
      productsController,
    },
  };
}
