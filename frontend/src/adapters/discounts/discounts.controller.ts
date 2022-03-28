import { Discount } from "../../domain/discount";
import { DiscountsInteractor } from "../../usecase/interactor/discounts.interactor";

export interface DiscountsController {
  get(brand: string): Promise<Discount>;
}

export function useDiscountsController(
  discountsInteractor: DiscountsInteractor
) {
  return {
    get: (brand: string) => discountsInteractor.getFromBrand(brand),
  };
}
