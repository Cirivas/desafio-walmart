import { Discount } from "../../domain/discount";
import { DiscountsPresenter } from "../presenter/discounts.presenter";
import { DiscountsRepository } from "../repository/discounts.repository";

export interface DiscountsInteractor {
  getFromBrand(brand: string): Promise<Discount>;
}
export function useDiscountsInteractor(
  discountsRepository: DiscountsRepository,
  discountsPresenter: DiscountsPresenter
): DiscountsInteractor {
  return {
    getFromBrand: (brand: string) =>
      discountsRepository
        .find(brand)
        .then((result) => discountsPresenter.responseDiscount(result)),
  };
}
