"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "@/lib/types";

export default function ProductStyle6({ products }: { products: Product[] }) {
	return (
		<div id="" className="container mx-auto mt-5">
			<div className="flex justify-between items-center border-b-2 border-red-500">
				<div className="bg-red-500 text-xl py-2 px-5 font-bold text-white rounded-t-md">
					PC Gaming
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
				<Swiper spaceBetween={50} slidesPerView={5}>
					{products?.map((product, index) => (
						<SwiperSlide key={index}>
							<ItemProduct
								title={product.title}
								slug={product.slug}
								price={product.price}
								image={product.image}
							/>
						</SwiperSlide>
					))}
				</Swiper>
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
