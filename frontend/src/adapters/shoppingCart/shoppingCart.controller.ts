import { Discount } from "../../domain/discount";
import { Product } from "../../domain/product";
import { CartElement, ShoppingCart } from "../../domain/shopppingCart";
import { DiscountsInteractor } from "../../usecase/interactor/discounts.interactor";
import { ShoppingCartInteractor } from "../../usecase/interactor/shoppingCart.interactor";

export interface ShoppingCartController {
  addProduct(product: Product): void;
  removeProduct(product: Product): void;
  getCart(): ShoppingCart;
}

export function useShoppingCartController(
  shoppingCartInteractor: ShoppingCartInteractor,
  discountsInteractor: DiscountsInteractor
): ShoppingCartController {
  // some helper functions

  /** Return true if possible is better */
  function compareDiscounts(possible: Discount, current: Discount): boolean {
    if (possible.discount === current.discount) {
      return possible.threshold <= current.threshold;
    }
    return possible.discount > current.discount;
  }

  /** Get cart total filtered by brand */
  const getTotalByBrand = (elements: CartElement[], brand: string): number => {
    return elements.reduce((total: number, current: CartElement) => {
      if (current.product.brand === brand) {
        return total + current.product.price * current.quantity;
      }
      return total;
    }, 0);
  };

  /** Return true if elements met or surpass the discount threshold */
  const checkThreshold = (
    discount: Discount,
    elements: CartElement[]
  ): boolean => {
    return getTotalByBrand(elements, discount.brand) >= discount.threshold;
  };

  /** Returns true if discount is already on the array of elements */
  function checkIfDiscountExist(
    discount: Discount,
    elements: Discount[],
    current?: Discount | null
  ): boolean {
    return (
      current?.brand === discount.brand ||
      elements.findIndex((elm) => elm.brand === discount.brand) > -1
    );
  }

  /** Returns true if brand is in the array of elements */
  function checkIfBrandExist(brand: string, elements: CartElement[]) {
    return elements.some((elm) => brand === elm.product.brand);
  }

  function checkIfProductExists(id: number, elements: CartElement[]): number {
    return elements.findIndex((elm) => id === elm.product.id);
  }

  return {
    addProduct: (product: Product) => {
      const shoppingCart = shoppingCartInteractor.get();
      const products = [...shoppingCart.products];
      let newProducts: CartElement[] = [];

      const existsIndex = checkIfProductExists(product.id, products);
      if (existsIndex > -1) {
        const existing = Object.assign({}, products[existsIndex]);
        existing.quantity = existing.quantity + 1;
        newProducts = [...products, existing];
      } else {
        newProducts = [
          ...products,
          {
            product,
            quantity: 1,
          },
        ];
      }

      shoppingCartInteractor.addProduct(product);
      discountsInteractor
        .getFromBrand(product.brand)
        .then((discount) => {
          const currentPossibleDiscounts = [
            ...shoppingCartInteractor.getPossibleDiscounts(),
          ];
          const currentDiscount = shoppingCartInteractor.getUsedDiscount();

          console.log(currentDiscount, currentPossibleDiscounts);

          // update possible discounts list
          if (
            !checkIfDiscountExist(
              discount,
              currentPossibleDiscounts,
              currentDiscount
            )
          ) {
            shoppingCartInteractor.addPossibleDiscount(discount);
          }

          if (currentDiscount) {
            // Check if the new discounts mets the threshold and is better than the curren discount
            if (
              checkThreshold(discount, newProducts) &&
              compareDiscounts(discount, currentDiscount)
            ) {
              shoppingCartInteractor.setUsedDiscount(discount);
              shoppingCartInteractor.removePossibleDiscount(discount);
              shoppingCartInteractor.addPossibleDiscount(currentDiscount);
            }
          } else {
            // as there is no discount, just check if mets the threshold and apply it
            if (checkThreshold(discount, newProducts)) {
              shoppingCartInteractor.setUsedDiscount(discount);
              shoppingCartInteractor.removePossibleDiscount(discount);
              return;
            }
          }
        })
        .catch(console.error);
    },
    removeProduct: (newProduct: Product) => {
      // remove product from cart
      shoppingCartInteractor.removeProduct(newProduct);
      // check if a discount was being applied and update if neccesary
      const currentDiscount = shoppingCartInteractor.getUsedDiscount();
      if (!currentDiscount) {
        // no discount was being applied
        return;
      }

      if (currentDiscount.brand !== newProduct.brand) {
        // current discount remains unaffected
        return;
      }

      // check threshold and remove if neccesary
      const shoppingCart = shoppingCartInteractor.get();
      if (!checkThreshold(currentDiscount, shoppingCart.products)) {
        // remove used discount
        shoppingCartInteractor.setUsedDiscount();
        // if there exist any remaining product of the same brand
        // return the discount to the possibilites
        if (checkIfBrandExist(newProduct.brand, shoppingCart.products)) {
          shoppingCartInteractor.addPossibleDiscount(currentDiscount);
        }

        // ToDO: recalculate current discount
      }
    },

    getCart: () => shoppingCartInteractor.get(),
  };
}
