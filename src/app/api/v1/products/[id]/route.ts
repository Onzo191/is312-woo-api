import { createWooCommerceInstance } from "@/services/woocommerce.service";
import { NextResponse } from "next/server";

// get product
export const GET = async (request: Request) => {
  const id = request.url.split("/products/")[1];
  const woocommerce = createWooCommerceInstance();
  try {
    const response = await woocommerce.get(`products/${id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// update product
export const PUT = async (request: Request) => {
  const id = request.url.split("/products/")[1];
  const woocommerce = createWooCommerceInstance();
  const productData = await request.json();

  try {
    const response = await woocommerce.put(`products/${id}`, productData);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// delete
export const DELETE = async (request: Request) => {
  const id = request.url.split("/products/")[1];
  const woocommerce = createWooCommerceInstance();

  try {
    const response = await woocommerce.delete(`products/${id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
