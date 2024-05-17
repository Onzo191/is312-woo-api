import type { Metadata } from "next";
import DefaultLayout from "@/components/layouts/default.layout";
import Breadcrumb from "@/components/breadcrumbs/breadcrumb";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Nhúm 7 - lab 4",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="WooNeedsWP" />

        <h1>The programmer is too lazy to implement this feature</h1>
      </DefaultLayout>
    </>
  );
}
