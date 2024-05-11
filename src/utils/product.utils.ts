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
