import { api } from "@/config/frontend";
import { Category } from "@/types/category.type";

export const getAllCategories = async () => {
  try {
    const response = await api.get<Category[]>("/api/v1/categories");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching categories");
  }
};
