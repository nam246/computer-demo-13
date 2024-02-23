"use client"

import { ProductCategory } from "@/lib/types"
import { useState, useEffect } from "react"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import FileInput from "./FileInput";


export default function AddProductsForm({ productsCategories }: { productsCategories: Array<ProductCategory> }) {

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState(title.replace(/\W/g, '-').toLowerCase());
    const [images, setImages] = useState<File | null>(null);
    const [externalImgUrlLink, setExternalImgUrlLink] = useState('');
    const [price, setPrice] = useState('');
    const [categories, setCategories] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const formData = new FormData();

    formData.append('title', title);
    formData.append('slug', title.replace(/\W/g, '-').toLowerCase());
    formData.append('images', images as File);
    formData.append('externalImgUrlLink', externalImgUrlLink);
    formData.append('price', price);
    formData.append('categories', categories);
    formData.append('description', description);
    formData.append('content', content);

    async function AddProductFormHandling(e: React.SyntheticEvent) {
        e.preventDefault();

        const res = await fetch('/api/admin/products', {
            method: "POST",
            body: formData
        });

        if (res.ok) {
            // console.log(res);
            setTitle('');
            setImages(null);
            setPrice('');
            setDescription('');
            setContent('');
        }
    }

    return (
        <form onSubmit={AddProductFormHandling} className="p-5 bg-slate-200 rounded">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                    <Label htmlFor="title">Product Name</Label>
                    <Input id="title" type="text" placeholder="Product title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="sm:col-span-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input id="slug" type="text" placeholder="Slug" onChange={e => setSlug(e.target.value)} defaultValue={title.replace(/\W/g, '-').toLowerCase()} />
                </div>

                <div className="sm:col-span-2">
                    <Label htmlFor="product-image-featured">Image featured</Label>
                    <div className="relative">
                        <div className="flex absolute">
                            <SelectMedia />
                            <FileInput />
                        </div>
                        <Input type="text" placeholder="external link" className="ps-[19.5rem]" value={externalImgUrlLink} onChange={e => setExternalImgUrlLink(e.target.value)} />
                    </div>
                </div>

                <div className="w-full">
                    <Label htmlFor="brand">Brand</Label>
                    <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Product brand" required={false} />
                </div>

                <div className="w-full">
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
                </div>

                <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                        id="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        onChange={e => setCategories(e.target.value)}
                    >
                        <option defaultValue="">Select category</option>
                        {productsCategories?.map((category, index) => (
                            <option key={index} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <Label htmlFor="item-weight">Item Weight (kg)</Label>
                    <input type="number" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="12" required={false} />
                </div>

                <div className="sm:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Description" rows={8} value={description} onChange={e => setDescription(e.target.value)} />
                </div>

                <div className="sm:col-span-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea id="content" placeholder="Your content here" rows={8} value={content} onChange={e => setContent(e.target.value)} />
                </div>
            </div>
            <Button className="mt-2" type="submit">Add product </Button>
        </form>
    )
}

interface Media {
    id: number,
    name: string,
    created_at: string
}

function SelectMedia() {

    const [image, setImage] = useState<string>('');
    const [media, setMedia] = useState<Media[]>([]);

    useEffect(() => {
        async function fetchMedia() {
            const res = await fetch('/api/admin/media');
            const data = await res.json();

            if (res.ok) {
                setMedia(data.media);
            }
        }
        fetchMedia();
    }, [])

    function checkboxHandle(e: any) {
        let isCheck: boolean = e.target.checked

        if (isCheck === true) {
            setImage(e.target.value)
        }
        else {
            setImage('');
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Choose from existed media</Button>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Choose media</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-8 items-center gap-4">
                    {
                        media.map((m, key) => (
                            <div key={key} className="grid-item">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" name="" id={`${m.name}`} value={m.name} onChange={(e: any) => checkboxHandle(e)} />
                                    {/* <Checkbox id={`${m.name}`} value={m.name} onChange={(e: any) => checkboxHandle(e)} /> */}
                                    <Label htmlFor={`${m.name}`}>
                                        <img src={`/uploads/${m.name}`} alt={m.name} />
                                        {m.name}
                                    </Label>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <DialogFooter>
                    {/* <Button>Add</Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}