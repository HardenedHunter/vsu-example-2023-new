import { useState } from "react";
import { api } from "~/api";

import { Product, ProductsRequestParams } from "~/types";

export const useProducts = (initialProducts: Product[]) => {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);

  const refetch = async (params: ProductsRequestParams) => {
    setIsLoading(true);

    try {
      const response = await api.products.getProducts(params);

      setProducts(response.data);
    } catch {
      // Обработать ошибку, например показать ее через react-toastify
    }

    setIsLoading(false);
  };

  return { products, isLoading, refetch };
};
