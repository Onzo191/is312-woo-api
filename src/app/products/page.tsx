import type { Metadata } from "next";
import DefaultLayout from "@/components/layouts/default.layout";
import ProductTable from "@/components/tables/product-table.component";

export const metadata: Metadata = {
  title: "Products",
  description: "Nhúm 7 - lab 4",
};

const ProductsPage = () => {
  return (
    <>
      <DefaultLayout>
        <ProductTable />
      </DefaultLayout>
    </>
  );
};

export default ProductsPage;
