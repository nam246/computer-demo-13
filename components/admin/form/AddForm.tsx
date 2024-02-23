"use client"
import { ProductCategory } from "@/lib/types"
import { useState } from "react"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function AddForm(
    { postCategories, fetchUrl }:
        {
            postCategories?: Array<ProductCategory>,
            fetchUrl: string
        },
    props: React.PropsWithChildren) {

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState(title.replace(/\W/g, '-').toLowerCase());
    const [images, setImages] = useState<File | null>(null);
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState(postCategories);

    const formData = new FormData();

    formData.append('title', title);
    formData.append('slug', title.replace(/\W/g, '-').toLowerCase());
    formData.append('images', images as File);
    formData.append('description', description);
    formData.append('content', content);

    async function AddProductFormHandling(e: React.SyntheticEvent) {
        e.preventDefault();

        const res = await fetch(fetchUrl, {
            method: "POST",
            body: formData
        });

        if (res.ok) {
            console.log(res);
            setTitle('');
            setImages(null);
            setContent('');
        }
    }

    return (
        <form onSubmit={AddProductFormHandling} className="p-5 bg-slate-200 rounded">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />

                </div>

                <div className="sm:col-span-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input id="slug" type="text" defaultValue={title.replace(/\W/g, '-').toLowerCase()} onChange={e => setSlug(e.target.value)} />
                </div>

                <div className="sm:col-span-2">
                    <Label htmlFor="image-featured">Image featured</Label>
                    <Input id="image-featured" type="file" multiple={false} onChange={(e: any) => setImages(e.target.files[0])} />
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
                </div>

                <div className="w-full">
                    <Label htmlFor="brand">Brand</Label>
                    <Input id="brand" type="text" placeholder="brand" />
                </div>

                <div className={postCategories != null ? "hidden" : ""}>
                    <Label htmlFor="category">Category</Label>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Categories</SelectLabel>
                                {categories?.map((category, index) => (
                                    <SelectItem onChange={(e: any) => setCategories(e.target.value)} key={index} value={category.name}>{category.name}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="item-weight">Item Weight (kg)</Label>
                    <Input id="item-weight" type="number" placeholder="12" required={false} />
                </div>
                <div className="sm:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Your description here" rows={8} value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="sm:col-span-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea id="content" placeholder="Your content here" rows={8} value={content} onChange={e => setContent(e.target.value)} />
                </div>
            </div>

            <Button type="submit" className="mt-3">Add product</Button>
        </form>
    )
}