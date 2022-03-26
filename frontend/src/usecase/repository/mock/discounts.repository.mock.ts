import { DiscountsRepository } from "../discounts.repository";

export default {
  find: (brand: string) => Promise.resolve({}),
} as DiscountsRepository;
