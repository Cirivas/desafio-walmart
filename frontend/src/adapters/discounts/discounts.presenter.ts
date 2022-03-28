import { Discount } from "../../domain/discount";

export interface DiscountsPresenter {
  // Used to apply certain transformation to a discount
  responseDiscount(d: Discount): Discount;
}

export function useDiscountsPresenter(): DiscountsPresenter {
  return {
    responseDiscount: (d: Discount) => d,
  };
}
