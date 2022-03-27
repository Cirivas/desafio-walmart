import { act, renderHook } from "@testing-library/react-hooks";
import { Product } from "../../domain/product";
import { ShoppingCart } from "../../domain/shopppingCart";
import {
  ShoppingCartRepository,
  useShoppingCartRepository,
} from "./shoppingCart.repository";

describe("add product", () => {
  it("should add an element", () => {
    const { result: repo } = renderHook<null, ShoppingCartRepository>(() =>
      useShoppingCartRepository()
    );

    const product: Product = {
      id: 5,
      brand: "brand",
      image: "",
      description: "",
      price: 555,
    };

    const expectedCart: ShoppingCart = { products: [{ product, quantity: 1 }] };

    expect(repo.current.getShoppingCart().products.length).toBe(0);

    act(() => repo.current.add(product));

    expect(repo.current.getShoppingCart().products.length).toBe(1);
    expect(repo.current.getShoppingCart()).toEqual(expectedCart);
  });

  it("should increase quantity of element", () => {
    const { result: repo } = renderHook<null, ShoppingCartRepository>(() =>
      useShoppingCartRepository()
    );

    const product: Product = {
      id: 5,
      brand: "brand",
      image: "",
      description: "",
      price: 555,
    };

    const expectedCart: ShoppingCart = { products: [{ product, quantity: 2 }] };

    expect(repo.current.getShoppingCart().products.length).toBe(0);

    act(() => repo.current.add(product));
    act(() => repo.current.add(product));

    expect(repo.current.getShoppingCart().products.length).toBe(1);
    expect(repo.current.getShoppingCart()).toEqual(expectedCart);
  });

  it("should remove element", () => {
    const { result: repo } = renderHook<null, ShoppingCartRepository>(() =>
      useShoppingCartRepository()
    );

    const product: Product = {
      id: 5,
      brand: "brand",
      image: "",
      description: "",
      price: 555,
    };

    const expectedCart: ShoppingCart = { products: [] };

    expect(repo.current.getShoppingCart().products.length).toBe(0);

    act(() => repo.current.add(product));
    act(() => repo.current.remove(product));

    expect(repo.current.getShoppingCart().products.length).toBe(0);
    expect(repo.current.getShoppingCart()).toEqual(expectedCart);
  });

  it("should decrese quantity of element", () => {
    const { result: repo } = renderHook<null, ShoppingCartRepository>(() =>
      useShoppingCartRepository()
    );

    const product: Product = {
      id: 5,
      brand: "brand",
      image: "",
      description: "",
      price: 555,
    };

    const expectedCart: ShoppingCart = { products: [{ product, quantity: 1 }] };

    expect(repo.current.getShoppingCart().products.length).toBe(0);

    act(() => repo.current.add(product));
    act(() => repo.current.add(product));

    act(() => repo.current.remove(product));

    expect(repo.current.getShoppingCart().products.length).toBe(1);
    expect(repo.current.getShoppingCart()).toEqual(expectedCart);
  });

  it("should throw Error on element not found", () => {
    const { result: repo } = renderHook<null, ShoppingCartRepository>(() =>
      useShoppingCartRepository()
    );
    const product: Product = {
      id: 5,
      brand: "brand",
      image: "",
      description: "",
      price: 555,
    };
    expect(repo.current.getShoppingCart().products.length).toBe(0);
    expect(() => act(() => repo.current.remove(product))).toThrow();
  });
});
