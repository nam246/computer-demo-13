import { ProductCategory } from "@/lib/types";

import AddProductsForm from "@/components/admin/form/AddProductsForm";

import prisma from "@/lib/prisma";


export default async function AddProduct() {

    const productsCategories = await prisma.category.findMany({}) as Array<ProductCategory>;

    return (
        <AddProductsForm productsCategories={productsCategories} />
    )
}