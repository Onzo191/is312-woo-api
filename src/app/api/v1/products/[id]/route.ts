import { createWooCommerceInstance } from "@/services/woocommerceService";

export const GET = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const woocommerce = createWooCommerceInstance();
  try {
    const response = await woocommerce.get(`products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
