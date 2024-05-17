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

export const convertFilesToBase64 = (imageList: File[]) => {
  if (!imageList || imageList.length === 0) {
    return [];
  }

  const base64Images: { src: string; name: string }[] = [];

  imageList.forEach((image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      base64Images.push({ src: reader.result as string, name: image.name });
    };
  });

  return base64Images;
};
