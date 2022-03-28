import { Discount } from "../../domain/discount";
import api, { endpoints } from "../../infrastructure/api";

export interface DiscountsRepository {
  find(brand: string): Promise<Discount>;
}

// Actual implementation of a usecase/repository/DiscountsRepository
export function useDiscountsRepository(): DiscountsRepository {
  return {
    // todo: add fail case
    find: (brand: string) => {
      const uri = endpoints.discounts.get;

      return api
        .request<Discount>({ ...uri, url: `${uri.url}/${brand}` })
        .then((r) => r.data);
    },
  };
}
