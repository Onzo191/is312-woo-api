import type { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Nhúm 7 - lab 4",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <h1>WooCommerce</h1>
      </DefaultLayout>
    </>
  );
}
