import { createWooCommerceInstance } from "@/services/woocommerceService";
import { NextResponse } from "next/server";

export const GET = async () => {
  const woocommerce = createWooCommerceInstance();

  try {
    const response = await woocommerce.get("products");
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
