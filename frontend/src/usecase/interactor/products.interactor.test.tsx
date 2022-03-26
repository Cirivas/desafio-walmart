jest.mock("../repository/mock/products.repository.mock")
jest.mock("../presenter/mock/product.presenter.mock")

import { Product } from "../../domain/product";
import productPresenterMock from "../presenter/mock/product.presenter.mock";
import productsRepositoryMock from "../repository/mock/products.repository.mock";
import { newProductInteractor } from "./products.interactor";

describe("getting products", () => {
    it("should get all products", (done) => {
        const productsRepository = jest.mocked(productsRepositoryMock, true);
        const productsPresenter = jest.mocked(productPresenterMock, true);

        const expectedProducts: Product[] = [{
            id: 1,
            brand: "brand",
            description: "description",
            image: "imagelink",
            price: 5,
        }];

        productsRepository
            .findAll
            .mockImplementation(jest.fn(() => Promise.resolve(expectedProducts)))

        productsPresenter
            .responseProducts
            .mockImplementation(jest.fn((p: Product[]) => p)
        )
        

        const interactor = newProductInteractor(productsRepository, productsPresenter);

        interactor.getAll().then(results => {
            expect.assertions(2);
            expect(results).toEqual(expectedProducts);
            expect(productsPresenter.responseProducts.mock?.calls?.length).toBe(1);
            done()
        }).catch(done);
    })
})

