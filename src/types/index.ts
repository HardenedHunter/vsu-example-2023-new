export type ProductsOrder = "asc" | "desc";

export type ProductsLimit = "5" | "10" | "20";

export type ProductsRequestParams = {
  order: ProductsOrder;
  limit: ProductsLimit;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ProductCreate = {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type ProductUpdate = ProductCreate;
