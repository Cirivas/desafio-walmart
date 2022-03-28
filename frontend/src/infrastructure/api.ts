import axios, { Method } from "axios";

export interface Endpoint {
  [key: string]: {
    method: Method | undefined;
    url: string;
    params?: { [key: string]: string };
  };
}

export const endpoints: { [key: string]: Endpoint } = {
  products: {
    list: {
      method: "GET",
      url: "products",
    },
  },
  discounts: {
    get: {
      method: "GET",
      url: "discounts",
    },
  },
};

export default axios.create({
  baseURL: "http://localhost:8081/",
});
