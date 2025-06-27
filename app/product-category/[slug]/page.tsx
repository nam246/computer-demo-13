type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

import { notFound } from "next/navigation";

// Hàm giả lập lấy danh sách sản phẩm theo slug danh mục
async function getProductsByCategorySlug(slug: string) {
	// TODO: Thay bằng fetch thực tế từ API hoặc DB
	if (slug === "laptop-laptop-mobile") {
		return [
			{
				id: 1,
				name: "Laptop ABC",
				price: 15990000,
				image: "/uploads/products/250-67939-pcgm575-08-10.jpg",
			},
			{
				id: 2,
				name: "Laptop XYZ",
				price: 20990000,
				image: "/uploads/products/7850-pc-gaming-toppo-ryzen-5-5600x-rtx-3060-ram-16gb-ssd-256gb.jpg",
			},
		];
	}
	return [];
}

export async function generateMetadata(props: {
	params: Params;
	searchParams: SearchParams;
}) {
	const params = await props.params;
	const searchParams = await props.searchParams;
	const slug = params.slug;
	const query = searchParams.query;
}

export default async function ProductCategoryPage(props: {
	params: Params;
	searchParams: SearchParams;
}) {
	const params = await props.params;
	const searchParams = await props.searchParams;
	const slug = params.slug;
	const query = searchParams.query;

	const products = await getProductsByCategorySlug(params.slug);
	if (!products || products.length === 0) return notFound();

	return (
		<div className="container mx-auto py-10">
			<h1 className="text-2xl font-bold mb-6 capitalize">
				Danh mục: {params.slug}
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{products.map((product) => (
					<div
						key={product.id}
						className="border rounded-lg p-4 shadow hover:shadow-lg transition"
					>
						<img
							src={product.image}
							alt={product.name}
							className="w-full h-48 object-cover rounded mb-4"
						/>
						<h2 className="text-lg font-semibold mb-2">{product.name}</h2>
						<div className="text-red-500 font-bold mb-2">
							{product.price.toLocaleString()}₫
						</div>
						<a href="/product/demo" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
							Xem chi tiết
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
