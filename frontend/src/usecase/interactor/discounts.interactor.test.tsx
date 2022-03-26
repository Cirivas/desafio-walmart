jest.mock("../presenter/mock/discounts.presenter.mock");
jest.mock("../repository/mock/discounts.repository.mock");
import discountsPresenterMock from "../presenter/mock/discounts.presenter.mock";
import discountsRepositoryMock from "../repository/mock/discounts.repository.mock";
import { useDiscountsInteractor } from "./discounts.interactor";

describe("discounts getter", () => {
  it("should get one discount", (done) => {
    const discountsPresenter = jest.mocked(discountsPresenterMock);
    const discountsRepository = jest.mocked(discountsRepositoryMock);

    const expectedDiscount = {
      brand: "brand",
      discount: 5,
      threshold: 5,
    };

    discountsPresenter.responseDiscount.mockImplementation(jest.fn((d) => d));
    discountsRepository.find.mockImplementation(
      jest.fn((brand: string) =>
        Promise.resolve({
          brand,
          discount: 5,
          threshold: 5,
        })
      )
    );

    const interactor = useDiscountsInteractor(
      discountsRepository,
      discountsPresenter
    );

    interactor
      .getFromBrand("brand")
      .then((result) => {
        expect.assertions(2);
        expect(result).toEqual(expectedDiscount);
        expect(discountsPresenter.responseDiscount.mock.calls.length).toBe(1);
        done();
      })
      .catch(done);
  });
});
