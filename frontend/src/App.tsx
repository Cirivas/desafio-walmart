import "./App.css";
import { ShoppingCart } from "./app/cart/shoppingcart";
import { ProductList } from "./app/products/list";
import { useRegistry } from "./registry/registry";

function App() {
  const registry = useRegistry();
  const { productsController, shoppingCartController } =
    registry.mainController;

  return (
    <div className="App">
      <ShoppingCart shoppingCartCtrl={shoppingCartController} />
      <ProductList
        prodCtrl={productsController}
        shoppingCartCtrl={shoppingCartController}
      />
    </div>
  );
}

export default App;
