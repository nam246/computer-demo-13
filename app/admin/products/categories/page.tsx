import AddProductsCategoriesForm from "@/components/admin/form/AddProductsCategoriesForm";
import ActionButton from "@/components/ui/ActionButton";
import prisma from "@/lib/prisma";
import { ProductCategory } from "@/lib/types";

export default async function AddProductsCategories() {

    const parentCategories = await prisma.category.findMany({}) as ProductCategory[];

    return (
        <div className="flex gap-3">
            <div className="w-1/3">
                <AddProductsCategoriesForm parentCategories={parentCategories} />
            </div>
            <div className="w-2/3">
                <div className="p-2 border rounded flex flex-col gap-2">
                    {parentCategories?.map((cate, index) => (
                        <div key={index} className="w-full flex justify-between align-center p-2 rounded bg-slate-200">
                            <a href="/">{cate.name}</a>
                            <ActionButton id={cate.id} deleteRequestUrl="/api/admin/products/categories" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}