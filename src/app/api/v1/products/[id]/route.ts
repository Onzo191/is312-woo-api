import { createWooCommerceInstance } from "@/services/woocommerceService";
import { NextResponse } from "next/server";

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
