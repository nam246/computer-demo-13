"use client";
import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { MotionFadeUp } from "@/components/Animate/MotionFadeUp";

export default function ProductCard({ product }: { product: Product }) {
	return (
		<MotionFadeUp>
			<div className="border rounded-lg p-4 shadow hover:shadow-lg transition group">
				{product.image ? (
					<div className="w-full h-96 rounded mb-4 overflow-hidden">
						<Image
							src={process.env.NEXT_PUBLIC_BASE_URL + product.image.url}
							alt={product.title}
							width={500}
							height={500}
							className="w-full h-96 object-cover rounded transform transition-transform duration-300 group-hover:scale-110"
						/>
					</div>
				) : null}
				<h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h2>
				<div className="text-red-500 font-bold mb-2">
					{product.price.toLocaleString()}₫
				</div>
				<Link
					href={`/product/${product.slug}`}
					className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
				>
					Xem chi tiết
				</Link>
			</div>
		</MotionFadeUp>
	);
}
