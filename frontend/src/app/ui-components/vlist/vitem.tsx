import React, { useCallback } from "react";
import { Product } from "../../../domain/product";
import { CartElement } from "../../../domain/shopppingCart";
import { Button } from "../button/button";
import { Img } from "../img/img";
import { Money } from "../money/money";
import "./vitem.css";

type VItemProps = {
  productElement: CartElement;
  onHandleMore?: (p: Product) => void;
  onHandleLess?: (p: Product) => void;
};

export function VItem({
  productElement,
  onHandleLess,
  onHandleMore,
}: VItemProps) {
  function getTotal(product: CartElement): number {
    return product.product.price * product.quantity;
  }

  const handleMore = useCallback(
    () => onHandleMore && onHandleMore(productElement.product),
    [productElement.product, onHandleMore]
  );
  const handleLess = useCallback(
    () => onHandleLess && onHandleLess(productElement.product),
    [productElement.product, onHandleLess]
  );

  return (
    <div className="vitem-container">
      <Img url={productElement.product.image} />
      <div className="product-details">
        <div className="header">
          <div className="description">
            {productElement.product.description}
          </div>
          <div className="brand">{productElement.product.brand}</div>
        </div>
        <div className="middle">
          <div className="quantity">Cantidad: {productElement.quantity}</div>
          <div className="price">
            Precio: {<Money value={productElement.product.price} />}
          </div>
        </div>
        <div className="resume">
          <div className="total">
            Total: {<Money value={getTotal(productElement)} />}
          </div>
          <Button label="Agregar mas" onClick={handleMore} />
          <Button label="Quitar" onClick={handleLess} />
        </div>
      </div>
    </div>
  );
}
