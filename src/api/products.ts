import { Product, ProductsRequestParams } from "~/types";
import { apiInstance } from "./instance";

export const getProducts = (params?: ProductsRequestParams) => {
  return apiInstance.get<Product[]>("/products", { params });
};

export const getProductById = (id: number) => {
  return apiInstance.get<Product>(`/products/${id}`);
};
