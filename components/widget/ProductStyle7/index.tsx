import Link from "next/link";
import { Product } from "@/lib/types";

import { ProductSwiper } from "../ProductStyle6/ProductSwiper";

export default async function ProductStyle7({ products }: { products: Product[] }) {	
	return (
		<div id="" className="container mx-auto">
			<div className="w-full bg-red-500 py-3 rounded">
				<ul className="flex justify-center items-center gap-3">
					<li className="text-md uppercase font-bold rounded-full bg-white hover:bg-red-600 hover:text-white p-2 shadow transition-all">
						<Link href={`/`}>Sản phẩm bán chạy</Link>
					</li>
					<li className="text-md uppercase font-bold rounded-full bg-white hover:bg-red-600 hover:text-white p-2 shadow transition-all">
						<Link href={`/`}>Sản phẩm mới</Link>
					</li>
					<li className="text-md uppercase font-bold rounded-full bg-white hover:bg-red-600 hover:text-white p-2 shadow transition-all">
						<Link href={`/`}>Sản phẩm khuyến mãi</Link>
					</li>
					<li className="text-md uppercase font-bold rounded-full bg-white hover:bg-red-600 hover:text-white p-2 shadow transition-all">
						<Link href={`/`}>Phụ kiện</Link>
					</li>
				</ul>

				<div className="p-3">
					<ProductSwiper products={products} />
				</div>
			</div>
		</div>
	);
}
