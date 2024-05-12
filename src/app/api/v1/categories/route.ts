import { createWooCommerceInstance } from "@/services/woocommerce.service";
import { NextResponse } from "next/server";

// get categories list
export const GET = async () => {
  const woocommerce = createWooCommerceInstance();

  try {
    const response = await woocommerce.get("products/categories", {
      page: 1,
      per_page: 100,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
