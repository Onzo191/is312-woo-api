import api from "./axios.config";
import { Category } from "@/types/category.type";

const processCategoriesResponse = (data: any[]): Category[] => {
  return data.map((category: any) => {
    return {
      id: category.id,
      name: category.name,
    };
  });
};

export const getAllCategories = async () => {
  try {
    const response = await api.get<Category[]>("/api/v1/categories");
    return processCategoriesResponse(response.data);
  } catch (error) {
    throw new Error("Error fetching categories");
  }
};
