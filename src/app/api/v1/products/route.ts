import { createWooCommerceInstance } from "@/services/woocommerce.service";
import { NextResponse } from "next/server";

// get product list
export const GET = async () => {
  const woocommerce = createWooCommerceInstance();

  try {
    const response = await woocommerce.get("products", {
      page: 1,
      per_page: 100,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// add new product
export const POST = async (request: Request) => {
  const woocommerce = createWooCommerceInstance();
  const productData = await request.json();

  try {
    const response = await woocommerce.post("products", productData);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};
