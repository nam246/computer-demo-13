"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProductStyle7({
	products,
}: {
	products: Array<Product>;
}) {
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
					<Swiper
						spaceBetween={15}
						slidesPerView={5}
						navigation
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
					>
						{products?.map((product, index) => (
							<SwiperSlide key={index}>
								<ItemProduct
									image={product.image}
									title={product.title}
									price={product.price}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
}

function ItemProduct(props: any) {
	return (
		<Link
			href={"/" + props.slug}
			className="rounded bg-white flex flex-col gap-2 items-center justify-start py-2"
		>
			<figure className="h-[15rem]">
				<Image
					className="w-full h-full object-cover"
					src={props.image}
					width={230}
					height={230}
					alt={props.title}
				/>
			</figure>
			<div>
				<h3 className="text-center text-sm uppercase font-bold mb-3">
					{props.title}
				</h3>
				<p className="text-center font-bold text-red-500">{props.price}</p>
			</div>
		</Link>
	);
}
