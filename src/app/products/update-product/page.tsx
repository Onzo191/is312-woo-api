import type { Metadata } from "next";
import DefaultLayout from "@/components/layouts/default.layout";
import Breadcrumb from "@/components/breadcrumbs/breadcrumb";

export const metadata: Metadata = {
  title: "Products",
  description: "Nhúm 7 - lab 4",
};

export default function updateProductNoti() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Update Product" />

        <h1>Select &#39;item&#39; by adding /id</h1>
      </DefaultLayout>
    </>
  );
}
