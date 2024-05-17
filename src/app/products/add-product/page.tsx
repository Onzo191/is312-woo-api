import type { Metadata } from "next";
import DefaultLayout from "@/components/layouts/default.layout";
import Breadcrumb from "@/components/breadcrumbs/breadcrumb";
import AddProductForm from "@/components/forms/add-product.component";

export const metadata: Metadata = {
  title: "Add Products",
  description: "Nhúm 7 - lab 4",
};

export default function AddProduct() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Add Product" />
        <AddProductForm />
      </DefaultLayout>
    </>
  );
}
