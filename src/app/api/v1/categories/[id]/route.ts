import { NextResponse } from "next/server";
import {
  getWooCategoryById,
  updateWooCategory,
  deleteWooCategory,
} from "@/services/backend/category.service";

export const GET = async (request: Request) => {
  const categoryId: string = request.url.split("/categories/")[1];

  try {
    const category = await getWooCategoryById(categoryId);
    return NextResponse.json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
};

export const PUT = async (request: Request) => {
  const categoryId = request.url.split("/products/")[1];
  const categoryData = await request.json();

  try {
    const data = await updateWooCategory(categoryId, categoryData);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

export const DELETE = async (request: Request) => {
  const categoryId = request.url.split("/categories/")[1];

  try {
    const data = await deleteWooCategory(categoryId);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};
