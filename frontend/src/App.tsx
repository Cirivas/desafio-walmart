import React from "react";
import "./App.css";
import { ProductList } from "./app/products/list";
import { useRegistry } from "./registry/registry";

function App() {
  const registry = useRegistry();
  const { productsController } = registry.mainController;
  return (
    <div className="App">
      <ProductList prodCtrl={productsController} />
    </div>
  );
}

export default App;
