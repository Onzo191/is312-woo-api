import type { Metadata } from "next";
import DefaultLayout from "@/components/layouts/default.layout";
import ProductTable from "@/components/tables/product-table.component";
import Breadcrumb from "@/components/breadcrumbs/breadcrumb";

export const metadata: Metadata = {
  title: "Products",
  description: "Nhúm 7 - lab 4",
};

const ProductsPage = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Products" />
        <ProductTable />
      </DefaultLayout>
    </>
  );
};

export default ProductsPage;
