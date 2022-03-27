import { Discount } from "../../domain/discount";
import { DiscountsPresenter } from "../presenter/discounts.presenter";
import { DiscountsRepository } from "../repository/discounts.repository";

export interface DiscountsInteractor {
  getFromBrand(brand: string): Promise<Discount>;
}
export function useDiscountsInteractor(
  dr: DiscountsRepository,
  dp: DiscountsPresenter
): DiscountsInteractor {
  return {
    getFromBrand: (brand: string) =>
      dr.find(brand).then((result) => dp.responseDiscount(result)),
  };
}
