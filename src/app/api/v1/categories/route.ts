import { NextResponse } from "next/server";
import {
  getWooCategories,
  createWooCategory,
} from "@/services/backend/category.service";

// get categories list
export const GET = async () => {
  try {
    const categories = await getWooCategories(1, 100);
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const POST = async (request: Request) => {
  const categoryData = await request.json();

  try {
    const data = await createWooCategory(categoryData);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};
