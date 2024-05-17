import { NextResponse } from "next/server";
import {
  getWooProductById,
  updateWooProduct,
  deleteWooProduct,
} from "@/services/backend/product.service";

// get product
export const GET = async (request: Request) => {
  const productId: string = request.url.split("/products/")[1];
  try {
    const product = await getWooProductById(productId);
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// update product
export const PUT = async (request: Request) => {
  const productId = request.url.split("/products/")[1];
  const productData = await request.json();

  try {
    const data = await updateWooProduct(productId, productData);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// delete
export const DELETE = async (request: Request) => {
  const productId = request.url.split("/products/")[1];

  try {
    const data = await deleteWooProduct(productId);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
