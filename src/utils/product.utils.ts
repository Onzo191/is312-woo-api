import { Category } from "@/types/category.type";

export const formatPrice = (price: number): string => {
  const formattedPrice: string = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
  return formattedPrice;
};

export const formatStock = (stock: number): string => {
  const formattedStock: string = new Intl.NumberFormat("vi-VN").format(stock);
  return formattedStock;
};

export const transformCategories = (categoriesData: Category[]) => {
  return categoriesData
    ? categoriesData.map((item) => ({
        value: item.id,
        label: item.name,
      }))
    : [];
};

export const transformFormCategories = (
  categoriesData: { value: string; label: string }[]
) => {
  return categoriesData
    ? categoriesData.map((item) => ({
        id: item.value,
        name: item.label,
      }))
    : [];
};

export const convertFilesToBase64 = async (
  imageList: File[]
): Promise<{ src: string; name: string }[]> => {
  if (!imageList || imageList.length === 0) {
    return [];
  }

  const base64ImagesPromises: Promise<{ src: string; name: string }>[] =
    imageList.map((image) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
          resolve({ src: reader.result as string, name: image.name });
        };
      });
    });

  const base64Images = await Promise.all(base64ImagesPromises);

  return base64Images;
};
