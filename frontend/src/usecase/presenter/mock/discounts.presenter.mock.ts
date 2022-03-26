import { Discount } from "../../../domain/discount";
import { DiscountsPresenter } from "../discounts.presenter";

export default {
  responseDiscount: (d: Discount) => d,
} as DiscountsPresenter;
