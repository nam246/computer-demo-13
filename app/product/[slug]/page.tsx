import { notFound } from "next/navigation";

// Hàm giả lập lấy dữ liệu sản phẩm theo slug
async function getProductBySlug(slug: string) {
	// TODO: Thay bằng fetch thực tế từ API hoặc DB
	if (slug === "demo") {
		return {
			name: "Demo Product",
			price: 1990000,
			description: "Đây là sản phẩm demo.",
			image:
				"/uploads/products/7850-pc-gaming-toppo-ryzen-5-5600x-rtx-3060-ram-16gb-ssd-256gb.jpg",
		};
	}
	return null;
}

export default async function SingleProductPage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = await params;
	const product = await getProductBySlug(slug);
	if (!product) return notFound();

	return (
		<div className="container mx-auto py-10">
			<div className="flex flex-col md:flex-row gap-8">
				<img
					src={product.image}
					alt={product.name}
					className="w-full md:w-1/3 rounded-lg shadow"
				/>
				<div className="flex-1">
					<h1 className="text-3xl font-bold mb-4">{product.name}</h1>
					<div className="text-2xl text-red-500 font-semibold mb-2">
						{product.price.toLocaleString()}₫
					</div>
					<p className="mb-6 text-gray-700">{product.description}</p>
					<button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
						Mua ngay
					</button>
				</div>
			</div>
		</div>
	);
}
