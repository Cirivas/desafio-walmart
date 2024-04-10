import { useCallback, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ShoppingCartController } from "../../adapters/shoppingCart/shoppingCart.controller";
import { Product } from "../../domain/product";
import { CartElement } from "../../domain/shopppingCart";
import { Money } from "../ui-components/money/money";
import { VList } from "../ui-components/vlist/vlist";

import "./shoppingcart.css";

export type CartListProps = {
  shoppingCartCtrl: ShoppingCartController;
};

export function ShoppingCart({ shoppingCartCtrl }: CartListProps) {
  const cart = shoppingCartCtrl.getCart();
  const possibleDiscounts = cart.possibleDiscounts;
  const usedDiscount = cart.usedDiscount;
  const [showingCart, toggleCart] = useState<boolean>(false);

  const handleMore = useCallback(
    (product: Product) => {
      shoppingCartCtrl.addProduct(product);
    },
    [shoppingCartCtrl]
  );

  const handleLess = useCallback(
    (product: Product) => {
      shoppingCartCtrl.removeProduct(product);
    },
    [shoppingCartCtrl]
  );

  const handleCartClick = useCallback(
    () => toggleCart(!showingCart),
    [showingCart]
  );

  const getTotalByBrand = (elements: CartElement[], brand: string): number => {
    return elements.reduce((total: number, current: CartElement) => {
      if (current.product.brand === brand) {
        return total + current.product.price * current.quantity;
      }
      return total;
    }, 0);
  };

  const getTotal = () => {
    const totalNoDiscount = cart.products.reduce(
      (total, current) => total + current.product.price * current.quantity,
      0
    );

    if (usedDiscount) {
      return totalNoDiscount - usedDiscount.discount;
    }
    return totalNoDiscount;
  };

  const getBestPossibleDiscount = () => {
    const sorted = possibleDiscounts.sort((a, b) => b.discount - a.discount);
    if (!sorted.length) {
      return "";
    }
    const discount = sorted[0];
    if (usedDiscount && usedDiscount.discount > discount.discount) {
      return "";
    }
    const brand = discount.brand;

    const totalByBrand = getTotalByBrand(cart.products, brand);

    return (
      <div className="bubble possible-discount">
        Agrega {<Money value={discount.threshold - totalByBrand} />} en
        productos {discount.brand} y aprovecha un descuento total de{" "}
        {<Money value={discount.discount} />} en tu compra!
      </div>
    );
  };

  return (
    <div>
      <FaShoppingCart size={40} color={"blue"} onClick={handleCartClick} />

      {showingCart && (
        <div className="side-list-container">
          {cart.products.length > 0 && (
            <>
              <VList
                productsElements={cart.products}
                onHandleMore={handleMore}
                onHandleLess={handleLess}
              />
              {usedDiscount && (
                <div className="bubble used-discount">
                  Se aplicó un descuento de{" "}
                  {<Money value={usedDiscount.discount} />} por haber comprado{" "}
                  {<Money value={usedDiscount.threshold} />} en productos{" "}
                  {usedDiscount.brand}{" "}
                </div>
              )}
              {getBestPossibleDiscount()}
              <h3>
                Total compra: <Money value={getTotal()} />{" "}
              </h3>
            </>
          )}
          {cart.products.length === 0 && <span>Tu carro está vacío</span>}
        </div>
      )}
    </div>
  );
}
