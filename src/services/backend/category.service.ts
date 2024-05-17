import woocommerce from "@/config/woocommerce.config";
import { Category } from "@/types/category.type";

const getWooCategories = async (page: number = 1, quantity: number = 100) => {
  const response = await woocommerce.get("products/categories", {
    page: page,
    per_page: quantity,
  });
  return response.data;
};

const getWooCategoryById = async (categoryId: string) => {
  const response = await woocommerce.get(`products/categories/${categoryId}`);
  return response.data;
};

const createWooCategory = async (categoryData: Category) => {
  const response = await woocommerce.post("products/categories", categoryData);
  return response.data;
};

const updateWooCategory = async (
  categoryId: string,
  categoryData: Category
) => {
  const response = await woocommerce.put(
    `products/categories/${categoryId}`,
    categoryData
  );
  return response.data;
};

const deleteWooCategory = async (categoryId: string) => {
  const response = await woocommerce.delete(
    `products/categories/${categoryId}`,
    { force: true }
  );
  return response.data;
};

export {
  getWooCategories,
  getWooCategoryById,
  createWooCategory,
  updateWooCategory,
  deleteWooCategory,
};
