import {
  DiscountsController,
  useDiscountsController,
} from "../adapters/discounts/discounts.controller";
import { useDiscountsPresenter } from "../adapters/discounts/discounts.presenter";
import { useDiscountsRepository } from "../adapters/discounts/discounts.repository";
import {
  DiscountsInteractor,
  useDiscountsInteractor,
} from "../usecase/interactor/discounts.interactor";
import { DiscountsRepository } from "../usecase/repository/discounts.repository";

export function GetDiscountsRegistry(): DiscountsController {
  return useDiscountsController(GetDiscountsInteractor());
}

export function GetDiscountsInteractor(): DiscountsInteractor {
  return useDiscountsInteractor(
    GetDiscountsRepository(),
    GetDiscountsPresenter()
  );
}

function GetDiscountsRepository(): DiscountsRepository {
  return useDiscountsRepository();
}

function GetDiscountsPresenter() {
  return useDiscountsPresenter();
}
