"use client";
import FileUploader from "@/app/components/select/FileUploader";
import TableInput from "@/app/components/select/TableInput";
import TableSelect from "@/app/components/select/TableSelect";
import TableTextarea from "@/app/components/select/TableTextArea";
import { ProductType } from "../../../../types/product.type";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Rating, Typography } from "@mui/material";
import TableRating from "@/app/components/select/TableRating";

// ✅ Validation Schema
// const schema = yup.object().shape({
//   name: yup.string().required("Product Name is required"),
//   description: yup.string().required("Description is required"),
//   price: yup.number().typeError("Must be a number").required("Price is required"),
//   oldPrice: yup.number().typeError("Must be a number").nullable(),
//   category: yup.string().required("Category is required"),
//   images: yup.array().of(yup.string()).required("Images are required"),
// });

const ProductForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductType>({
        // resolver: yupResolver(schema as any),
    });

    const onSubmit = (data: ProductType) => {
        console.log("Form Data:", data);
    };

    return (
        <section className="p-5 bg-gray-50">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="form py-1 p-1 md:p-8 md:py-1"
            >
                <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
                    <TableInput
                        label="Product Name"
                        name="name"
                        placeholder="Product Name"
                        register={register}
                        error={errors.name}
                    />

                    <TableTextarea
                        label="Product Description"
                        name="description"
                        placeholder="Product Description"
                        register={register}
                        error={errors.description}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <TableSelect
                            label="Product Category"
                            name="category"
                            placeholder="Select Category"
                            register={register}
                            error={errors.category}
                            options={[
                                { label: "Electronics", value: "electronics" },
                                { label: "Clothing", value: "clothing" },
                                { label: "Books", value: "books" },
                            ]}
                        />
                        <TableSelect
                            label="Product Sub Category"
                            name="subCategory"
                            placeholder="Select Sub Category"
                            register={register}
                            error={errors.subCategory}
                            options={[
                                { label: "Electronics", value: "electronics" },
                                { label: "Clothing", value: "clothing" },
                                { label: "Books", value: "books" },
                            ]}
                        />

                        <TableSelect
                            label="Product Third Level Category"
                            name="thirdCategory"
                            placeholder="Select Third Level Category"
                            register={register}
                            error={errors.thirdCategory}
                            options={[
                                { label: "Electronics", value: "electronics" },
                                { label: "Clothing", value: "clothing" },
                                { label: "Books", value: "books" },
                            ]}
                        />

                        <TableInput
                            label="Product Price"
                            name="price"
                            type="number"
                            placeholder="Product Price"
                            register={register}
                            error={errors.price}
                        />

                        <TableInput
                            label="Product Old Price"
                            name="oldPrice"
                            type="number"
                            placeholder="Product Old Price"
                            register={register}
                            error={errors.oldPrice}
                        />

                        <TableSelect
                            label="Is Featured"
                            name="isFeatured"
                            placeholder="Select Is Featured"
                            register={register}
                            error={errors.isFeatured}
                            options={[
                                { label: "Yes", value: "yes" },
                                { label: "No", value: "no" },
                            ]}
                        />

                        <TableInput
                            label="Product Stock"
                            name="stock"
                            type="number"
                            placeholder="Product Stock"
                            register={register}
                            error={errors.stock}
                        />
                        <TableInput
                            label="Product Brand"
                            name="brand"
                            type="number"
                            placeholder="Product Brand"
                            register={register}
                            error={errors.brand}
                        />
                        <TableInput
                            label="Product Discount"
                            name="discount"
                            type="number"
                            placeholder="Product Discount"
                                register={register}
                            error={errors.discount}
                        />

                        <TableSelect
                            label="Product RAMS"
                            name="rams"
                            placeholder="Select RAMS"
                            register={register}
                            error={errors.rams}
                            options={[
                                { label: "4GB", value: "4GB" },
                                { label: "8GB", value: "8GB" },
                                { label: "16GB", value: "16GB" },
                            ]}
                        />

                        <TableSelect
                            label="Product Weight"
                            name="weight"
                            placeholder="Select Product Weight"
                            register={register}
                            error={errors.weight}
                            options={[
                                { label: "Electronics", value: "electronics" },
                                { label: "Clothing", value: "clothing" },
                                { label: "Books", value: "books" },
                            ]}
                        />

                        <TableSelect
                            label="Product Size"
                            name="size"
                            placeholder="Select Product Size"
                            register={register}
                            error={errors.size}
                            options={[
                                { label: "Electronics", value: "electronics" },
                                { label: "Clothing", value: "clothing" },
                                { label: "Books", value: "books" },
                            ]}
                        />

                        <TableRating
                            label="Product Rating"
                            name="rating"
                            placeholder="Select Product Rating"
                            register={register}
                            error={errors.rating}
                        />
                    </div>


                    <FileUploader
                        label="Media & Images"
                        name="images"
                        register={register}
                        error={errors?.images as any}
                        multiple
                    />


                    <FileUploader
                        label="Banner & Images"
                        name="bannerImages"
                        register={register}
                        // error={errors?.bannerImages as any}
                        multiple
                    />
                    <TableInput
                        label="Banner Title"
                        name="bannerTitle"
                        placeholder="Banner Title"
                        register={register}
                        error={errors.bannerTitle}
                    />

                    <div className="flex gap-5">
                    <button
                        type="submit"
                        className="buttonUtils bg-blue-600 text-white px-5 py-2 mt-5 rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                    <button
                        type="reset"
                        className="buttonUtils bg-blue-600 text-white px-5 py-2 mt-5 rounded hover:bg-blue-700"
                    >
                        Reset
                    </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default ProductForm;
