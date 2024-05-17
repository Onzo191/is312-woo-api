import { Category } from "./category.type";

export type Product = {
  id: string;
  sku?: string;
  images?: { src: string; name: string }[];
  name: string;
  description?: string;
  categories?: Category[];
  regular_price: number;
  price: number;
  stock_quantity: number;
};
