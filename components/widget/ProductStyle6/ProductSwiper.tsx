"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ProductItem } from "./ProductItem";
import { Product } from "@/lib/types";

export function ProductSwiper({ products }: { products: Product[] }) {
	return (
		<Swiper spaceBetween={50} slidesPerView={5}>
			{products?.map((product, index) => (
				<SwiperSlide key={index}>
					<ProductItem product={product} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
