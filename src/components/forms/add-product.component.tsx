"use client";
import { useState, useEffect, FormEvent } from "react";
import { getAllCategories } from "@/services/frontend/category.service";
import { addProduct } from "@/services/frontend/product.service";
import { Product } from "@/types/product.type";
import { Category } from "@/types/category.type";
import {
  transformCategories,
  transformFormCategories,
  convertFilesToBase64,
} from "@/utils/product.utils";
import {
  MultiSelect,
  Input,
  InputFile,
  TextArea,
} from "@/components/forms/elements/";

const defaultFormValues: Product = {
  id: "",
  sku: "",
  images: [],
  name: "",
  description: "",
  categories: [],
  regular_price: 0,
  price: 0,
  stock_quantity: 0,
};

const AddProductForm = () => {
  const [productData, setProductData] = useState(defaultFormValues);
  const [categories, setCategories] = useState<Category[]>([]);
  const [imageList, setImageList] = useState<File[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const handleChange = (name: string, value: any) => {
    console.log(name, ":", value);
    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: value,
    }));
  };

  const handleImageChange = (name: string, value: any) => {
    setImageList(value);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      if (productData.categories) {
        let transformedCategory: any[] = productData.categories;

        productData.categories = await transformFormCategories(
          transformedCategory
        );
      }

      const base64Images = await convertFilesToBase64(imageList);

      // Cập nhật các ảnh trong productData thành mảng đối tượng chứa base64 và tên tệp
      const updatedProductData = {
        ...productData,
        images: base64Images,
      };

      await alert("Sending...");
      await addProduct(updatedProductData);
      await alert("Form Submitted");

      await setProductData(defaultFormValues);
      setImageList([]);
    } catch (error) {
      console.log("Failed to add new product. Please try again later.");
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories: Category[] = await getAllCategories();
        const transformedArray: any[] = await categories.map((item) => {
          return {
            value: item.id,
            label: item.name,
          };
        });
        await console.log(transformedArray);
        setCategories(transformedArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 xl:grid-cols-3"
    >
      <div className="flex flex-col gap-9 col-span-2">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Product Data
            </h3>
          </div>
          <div className="p-6.5">
            <div className="mb-4.5">
              <Input
                onChange={handleChange}
                value={productData.name}
                id="name"
                label="Product Name"
                type="text"
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <Input
                  onChange={handleChange}
                  value={productData.sku}
                  id="sku"
                  label="Product SKU"
                  type="text"
                  placeholder="Enter product SKU"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <Input
                  onChange={handleChange}
                  value={productData.stock_quantity}
                  id="stock_quantity"
                  label="Product Stock"
                  type="number"
                  placeholder="Enter stock"
                  required
                />
              </div>
            </div>

            <div className="mb-4.5">
              <MultiSelect
                loading={loading}
                label="Category"
                closeMenuOnSelect={false}
                options={categories}
                isMulti
                value={productData.categories}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <Input
                  onChange={handleChange}
                  value={productData.regular_price}
                  id="regular_price"
                  label="Product Price"
                  type="number"
                  placeholder="Enter price"
                  required
                />
              </div>

              <div className="w-full xl:w-1/2">
                <Input
                  onChange={handleChange}
                  value={productData.price}
                  id="price"
                  label="Product Sale Price"
                  type="number"
                  placeholder="Enter sale price"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <TextArea
                onChange={handleChange}
                value={productData.description}
                id="description"
                label="Product Description"
                placeholder="Type product description"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-9 col-span-1">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Product Image
            </h3>
          </div>
          <div className="p-6.5">
            <div className="mb-4.5">
              <InputFile
                onChange={handleImageChange}
                files={imageList}
                id="imageList"
                label="Image List"
                type="file"
                placeholder="Choose a file"
                // required
              />
            </div>

            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;
