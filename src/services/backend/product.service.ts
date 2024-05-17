import woocommerce from "@/config/woocommerce.config";
import { uploadImages } from "@/services/backend/upload-image.service";
import { Product } from "@/types/product.type";

const getWooProducts = async (page: number = 1, quantity: number = 100) => {
  const response = await woocommerce.get("products", {
    page: page,
    per_page: quantity,
  });
  return response.data;
};

const getWooProductById = async (productId: string) => {
  const response = await woocommerce.get(`products/${productId}`);
  return response.data;
};

const createWooProduct = async (productData: Product) => {
  if (productData.images) {
    const imageUrls = await uploadImages(productData.images);
    productData.images = imageUrls;
  }
  const response = await woocommerce.post("products", productData);
  return response.data.permalink;
};

const updateWooProduct = async (productId: string, productData: Product) => {
  if (productData.images) {
    const imageUrls = await uploadImages(productData.images);
    productData.images = imageUrls;
  }
  const response = await woocommerce.put(`products/${productId}`, productData);
  return response.data;
};

const deleteWooProduct = async (productId: string) => {
  const response = await woocommerce.delete(`products/${productId}`, {
    force: true,
  });
  return response.data;
};

export {
  getWooProducts,
  getWooProductById,
  createWooProduct,
  updateWooProduct,
  deleteWooProduct,
};
