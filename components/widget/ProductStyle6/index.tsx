"use server";
import Link from "next/link";

import { ProductSwiper } from "./ProductSwiper";
import { Product } from "@/lib/types";

export default async function ProductStyle6({
	title,
	products,
}: {
	title: string;
	products: Product[];
}) {
	return (
		<div id="" className="container mx-auto mt-5">
			<div className="flex justify-between items-center border-b-2 border-red-500">
				<div className="bg-red-500 text-xl py-2 px-5 font-bold text-white rounded-t-md">
					{title}
				</div>

				<div>
					<ul className="flex gap-2 text-sm">
						<li>
							<Link href={`/`} className="hover:text-red-500">
								Laptop <span className="text-slate-500">/</span>
							</Link>
						</li>
						<li>
							<Link href={`/`} className="hover:text-red-500">
								Điện thoại <span className="text-slate-500">/</span>
							</Link>
						</li>
						<li>
							<Link href={`/`} className="hover:text-red-500">
								Máy tính bảng <span className="text-slate-500">/</span>
							</Link>
						</li>
						<li>
							<Link href={`/`} className="hover:text-red-500">
								Xem tất cả<span className="text-slate-500">/</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<ProductSwiper products={products} />
			</div>
		</div>
	);
}
