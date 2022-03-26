import { Discount } from "../../domain/discount";

export interface DiscountsRepository {
  find(brand: string): Promise<Discount>;
}
