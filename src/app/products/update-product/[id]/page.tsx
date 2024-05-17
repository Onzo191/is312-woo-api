import type { Metadata } from "next";
import DefaultLayout from "@/components/layouts/default.layout";
import Breadcrumb from "@/components/breadcrumbs/breadcrumb";
import UpdateProductForm from "@/components/forms/update-product.component";

export const metadata: Metadata = {
  title: "Update Products",
  description: "Nhúm 7 - lab 4",
};

type EditBlogParams = {
  params: {
    id: string;
  };
};

export default function UpdateProduct({ params }: EditBlogParams) {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Update Product" />
        <UpdateProductForm productId={params.id ? `${params.id}` : ""} />
      </DefaultLayout>
    </>
  );
}
