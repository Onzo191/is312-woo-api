import { NextResponse, NextRequest } from "next/server";
import {
  getWooProducts,
  createWooProduct,
} from "@/services/backend/product.service";

// get product list
export const GET = async () => {
  try {
    const products = await getWooProducts(1, 100);
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// add new product
export const POST = async (request: Request) => {
  const productData = await request.json();

  try {
    const productUrl = await createWooProduct(productData);
    return NextResponse.json(productUrl);
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};
