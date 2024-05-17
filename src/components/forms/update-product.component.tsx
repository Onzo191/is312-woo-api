"use client";
import { useState, useEffect, FormEvent } from "react";
import { getAllCategories } from "@/services/frontend/category.service";
import { getProduct, updateProduct } from "@/services/frontend/product.service";
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

type UpdateProductForm = {
  productId: string;
};

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

const UpdateProductForm: React.FC<UpdateProductForm> = ({ productId }) => {
  const [productData, setProductData] = useState(defaultFormValues);
  const [updateData, setUpdateData] = useState<{
    categories?: any[];
    images?: any[];
  }>({});
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageList, setImageList] = useState<File[]>([]);

  const handleChange = (name: string, value: any) => {
    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: value,
    }));
    changeUpdateData(name, value);
  };

  const changeUpdateData = (name: string, value: any) => {
    setUpdateData((prevUpdateData) => ({
      ...prevUpdateData,
      [name]: value,
    }));
  };

  const handleImageChange = (name: string, value: any) => {
    setImageList(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (updateData.categories)
      updateData.categories = transformFormCategories(updateData.categories);

    if (imageList.length) updateData.images = convertFilesToBase64(imageList);

    const updatedProductData = {
      ...updateData,
    };
    updateProduct(productId, updatedProductData);
    console.log("updatedProductData");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cData: Category[] = await getAllCategories();
        const transformedArray: any[] = await transformCategories(cData);

        const {
          id,
          sku,
          images,
          name,
          description,
          categories,
          regular_price,
          price,
          stock_quantity,
        }: Product = await getProduct(productId);

        const pData: any = {
          id: id || "",
          sku: sku || "",
          images: images || [],
          name: name || "",
          description: description || "",
          categories: transformCategories(categories ? categories : []),
          regular_price: regular_price || 0,
          price: price || 0,
          stock_quantity: stock_quantity || 0,
        };

        await console.log(pData);

        setProductData(pData);
        setCategories(transformedArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };
    fetchData();
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

export default UpdateProductForm;
