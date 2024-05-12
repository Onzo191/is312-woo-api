import api from "./axios.config";
import { Product } from "@/types/product.type";

const processProductsResponse = (data: any[]): Product[] => {
  return data.map((product: any) => {
    const imageSrc = product.images.length > 0 ? product.images[0].src : "";
    const categories = product.categories
      .map((category: any) => category.name)
      .join(", ");
    return {
      id: product.id,
      image: imageSrc,
      name: product.name,
      category: categories,
      regular_price: product.regular_price,
      price: product.price,
      total_sales: product.total_sales,
      stock_quantity: product.stock_quantity,
    };
  });
};

export const getAllProducts = async () => {
  try {
    const response = await api.get<Product[]>("/api/v1/products");
    return processProductsResponse(response.data);
  } catch (error) {
    throw new Error("Error fetching products");
  }
};

export const addProduct = async () => {
  try {
  } catch (error) {
    throw new Error("Error adding new product");
  }
};
