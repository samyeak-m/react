import React from "react";
import Genericinput from "../../../components/Genericinput";
import { Form, Formik } from "formik";

function CreateProduct() {
    return (
        <>
            <div className="flex flex-col items-start py-12 min-h-lvh sm:px-6 lg:px-8">
                <div className="mt-8 sm:w-full sm:max-w-sm">
                    <div className="space-y-6">

                        <Formik>
                            <Form className="space-y-4">
                                <Genericinput
                                    label="Product Name"
                                    name="Name"
                                    type="text"
                                    placeholder="Product Name"
                                />

                                <Genericinput
                                    label="Price"
                                    name="price"
                                    type="number"
                                    placeholder="price"
                                />

                                <Genericinput
                                    label="Description"
                                    name="description"
                                    type="text"
                                    placeholder="Enter a Description"
                                />

                                <Genericinput
                                    label="Brand"
                                    name="Brand"
                                    type="text"
                                    placeholder="Enter a Brand name"
                                />

                                <Genericinput
                                    label="Select Images"
                                    name="image"
                                    type="file"
                                    placeholder="Select a product images"
                                    multiple="multiple"
                                />


                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Create a Product
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateProduct;