import { api } from "@/config/frontend";
import { Product } from "@/types/product.type";

export const getAllProducts = async () => {
  try {
    const response = await api.get<Product[]>("/api/v1/products");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch all products. Please try again later.");
  }
};

export const getProduct = async (productId: string) => {
  try {
    const response = await api.get<Product>(`/api/v1/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      "Failed to fetch product details. Please make sure the product ID is correct."
    );
  }
};

export const addProduct = async (data: Product) => {
  console.log(data);
  try {
    console.log(await api.post("/api/v1/products", data));
  } catch (error) {
    throw new Error("Failed to add new product. Please try again later.");
  }
};

export const updateProduct = async (productId: string, productData: any) => {
  try {
    const response = await api.put(
      `/api/v1/products/${productId}`,
      productData
    );
    console.log(response);
  } catch (error) {
    throw new Error(
      "Failed to update product details. Please try again later."
    );
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const response = await api.delete(`/api/v1/products/${productId}`);
    console.log(response);
  } catch (error) {
    throw new Error("Failed to delete product. Please try again later.");
  }
};
