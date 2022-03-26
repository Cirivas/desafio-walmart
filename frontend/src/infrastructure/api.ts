import axios, { Method } from "axios";

export interface Endpoint {
  [key: string]: {
    method: Method | undefined;
    url: string;
  };
}

export const endpoints: { [key: string]: Endpoint } = {
  products: {
    list: {
      method: "GET",
      url: "products",
    },
  },
};

export default axios.create({
  baseURL: "http://localhost:8081/",
});
