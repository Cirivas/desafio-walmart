import React from "react";
import { Product } from "../../../domain/product";
import { CartElement } from "../../../domain/shopppingCart";
import { VItem } from "./vitem";

type VListProps = {
  productsElements: CartElement[];
  onHandleMore?: (p: Product) => void;
  onHandleLess?: (p: Product) => void;
};

export function VList({
  productsElements,
  onHandleMore,
  onHandleLess,
}: VListProps) {
  return (
    <div className="vlist-container">
      {productsElements.map((productElement) => (
        <div
          key={`${productElement.product.brand}+${productElement.product.price}+${productElement.quantity}`}
        >
          <VItem
            onHandleLess={onHandleLess}
            onHandleMore={onHandleMore}
            productElement={productElement}
          />
        </div>
      ))}
    </div>
  );
}
