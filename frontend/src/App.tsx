import React, { useCallback, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./App.css";
import { ShoppingCart } from "./app/cart/list";
import { ProductList } from "./app/products/list";
import { useRegistry } from "./registry/registry";

function App() {
  const registry = useRegistry();
  const [showingCart, toggleCart] = useState<boolean>(false);
  const { productsController, shoppingCartController } =
    registry.mainController;

  const handleCartClick = useCallback(
    () => toggleCart(!showingCart),
    [showingCart]
  );

  return (
    <div className="App">
      <FaShoppingCart size={40} color={"blue"} onClick={handleCartClick} />
      {/* <h5>
        En el carro:
        {shoppingCartController.getCart().products.map((elm) => (
          <p
            key={`${elm.product.brand}+${elm.product.price}+${elm.quantity}`}
          >{`Marca: ${elm.product.brand}, Precio Unitario: ${elm.product.price}, Cantidad: ${elm.quantity}`}</p>
        ))}
      </h5>
      <h5>
        Posibles descuentos:
        {shoppingCartController.getCart().possibleDiscounts.map((elm) => (
          <p key={`${elm.brand}+${elm.discount}+${elm.threshold}`}>
            {`Marca: ${elm.brand}, Descuento: ${elm.discount}, Meta: ${elm.threshold}`}
          </p>
        ))}
      </h5>
      <h5>
        Descuento aplicado
        {currentDiscount &&
          ` Marca: ${currentDiscount.brand}, Descuento: ${currentDiscount.discount}, Meta: ${currentDiscount.threshold}`}
      </h5> */}

      {showingCart && (
        <ShoppingCart shoppingCartCtrl={shoppingCartController} />
      )}
      <ProductList
        prodCtrl={productsController}
        shoppingCartCtrl={shoppingCartController}
      />
    </div>
  );
}

export default App;
