import React from "react";
import "./App.css";
import { ProductList } from "./app/products/list";
import { useRegistry } from "./registry/registry";

function App() {
  const registry = useRegistry();
  const mainController = registry.mainController;
  return (
    <div className="App">
      <ProductList prodCtrl={mainController.productsController!} />
    </div>
  );
}

export default App;
