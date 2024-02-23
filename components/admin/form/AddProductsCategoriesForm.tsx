"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProductCategory } from "@/lib/types";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddProductsCategoriesForm({ parentCategories }: { parentCategories: ProductCategory[] }) {

    const router = useRouter();

    const [name, setName] = useState('');
    const [parentId, setParentId] = useState<number>(0);

    let data = {
        name: name,
        parentId: parentId
    }

    async function addProductsCategories(e: React.SyntheticEvent) {
        e.preventDefault();

        const res = await fetch('/api/admin/products/categories', {
            method: 'POST',
            headers: {
            },
            body: JSON.stringify(data),
        })

        if (res.ok) {
            router.refresh();
            setName('');
        }
    }

    return (
        <form onSubmit={addProductsCategories} action="" className="p-5 bg-slate-200 rounded">
            <div className="sm:col-span-2">
                <Label htmlFor="name">Category name</Label>
                <Input id="name" type="text" placeholder="Type products category name" required={false} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="sm:col-span-2">
                <Label htmlFor="category">Parent Category</Label>
                <select
                    className="px-[12px] py-[8px] block rounded-md w-full focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 outline-none"
                    name="category" id="category"
                    onChange={(e: any) => setParentId(e.target.value)}
                >
                    {parentCategories?.map((category, index) => (
                        <option key={index} value={category.id} data-id={category.id} >{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="sm:col-span-2">
                <Label htmlFor="image">Category featured image</Label>
                <Input id="image" type="file" placeholder="Type product name" required={false} accept="jpg, jpeg, png, webp" />
            </div>
            <Button type="submit" className="mt-3">Add products Categories</Button>
        </form>
    )
}