import { ProductsRepository } from "../products.repository";

export default {
    findAll: () => Promise.resolve([])
} as ProductsRepository;
