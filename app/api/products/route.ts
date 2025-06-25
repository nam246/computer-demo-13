import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/lib/types";
import { ProductCategory } from "@/lib/types";

const products: Product[] = [
	{
		id: 1,
		title: "CPU INTEL Core i3-12700 (12C/20T, 4.90 GHz, 25MB) - 1700",
		slug: "iphone-9",
		description: "An apple mobile which is nothing like apple",
		content:
			"An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple",
		image: "/uploads/products/cpu-i3.webp",
		price: "599",
	},
	{
		id: 2,
		title: "CPU INTEL Core i5-12600H (12C/20T, 4.90 GHz, 25MB) - 5500",
		slug: "iphone-9",
		description: "An apple mobile which is nothing like apple",
		content:
			"An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple",
		image: "/uploads/products/cpu-i5-2.webp",
		price: "599",
	},
	{
		id: 3,
		title: "CPU INTEL Core i5-14700K (12C/20T, 4.90 GHz, 50MB) - 6578",
		slug: "iphone-9",
		description: "An apple mobile which is nothing like apple",
		content:
			"An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple",
		image: "/uploads/products/cpu-i5-7.webp",
		price: "599",
	},
	{
		id: 4,
		title: "CPU INTEL Core i7-12700 (12C/20T, 4.90 GHz, 25MB) - 1700",
		slug: "iphone-9",
		description: "An apple mobile which is nothing like apple",
		content:
			"An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple",
		image: "/uploads/products/cpu-i5.webp",
		price: "599",
	},
	{
		id: 5,
		title: "CPU INTEL Core i7-12700 (12C/20T, 4.90 GHz, 25MB) - 1700",
		slug: "iphone-9",
		description: "An apple mobile which is nothing like apple",
		content:
			"An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple",
		image: "/uploads/products/cpu-i7.webp",
		price: "599",
	},
	{
		id: 6,
		title: "CPU INTEL Core i7-12700 (12C/20T, 4.90 GHz, 25MB) - 1700",
		slug: "iphone-9",
		description: "An apple mobile which is nothing like apple",
		content:
			"An apple mobile which is nothing like appleAn apple mobile which is nothing like appleAn apple mobile which is nothing like apple",
		image: "/uploads/products/cpu-i3.webp",
		price: "599",
	},
];

export async function GET(req: NextRequest) {
	return NextResponse.json({
		message: "complete",
		products: products,
	});
}
