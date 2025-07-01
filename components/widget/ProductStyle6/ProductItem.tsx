import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";

import { MotionFadeUp } from "@/components/Animate/MotionFadeUp";

export function ProductItem({ product }: { product: Product }) {
	return (
		<MotionFadeUp>
			<Link
				href={"/product/" + product.slug}
				className="rounded bg-white flex flex-col gap-2 items-center justify-start py-2"
			>
				<figure className="h-[15rem]">
					{product.thumbnail && (
						<Image
							className="w-full h-full object-cover"
							src={
								process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL + product.thumbnail.url
							}
							width={230}
							height={230}
							alt={product.title}
						/>
					)}
				</figure>
				<div>
					<h3 className="text-center text-sm uppercase font-bold mb-3 px-2 line-clamp-2">
						{product.title}
					</h3>
					<p className="text-center font-bold text-red-500">{product.price}</p>
				</div>
			</Link>
		</MotionFadeUp>
	);
}
