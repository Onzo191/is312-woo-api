import type { Metadata } from "next";
import DefaultLayout from "@/components/layouts/default.layout";

export const metadata: Metadata = {
  title: "Invoices",
  description: "Nhúm 7 - lab 4",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <h1>Invoices</h1>
      </DefaultLayout>
    </>
  );
}
