"use client";

import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Menu,
	Building2,
	Rss,
	Wrench,
	Headset,
	Laptop,
	Usb,
	Printer,
	Cctv,
	Headphones,
	Gamepad2,
	Keyboard,
	Monitor,
	Fan,
	Cpu,
} from "lucide-react";

export default function Navigation() {
	return (
		<div>
			<nav className="bg-red-500 text-white">
				<div className="container mx-auto">
					<div className="flex items-center relative h-[50px]">
						<div className="w-3/12 bg-red-600 flex items-center h-full">
							<Menu /> Danh mục sản phẩm
						</div>

						<div className="w-9/12">
							<ul className="flex justify-start items-center">
								<li className="p-3 hover:bg-red-400 transition-all">
									<Link
										href={`/showroom`}
										className="flex gap-2 items-end uppercase font-bold text-sm"
									>
										<Building2 /> Hệ thống showroom
									</Link>
								</li>
								<li className="p-3 hover:bg-red-400 transition-all">
									<Link
										href={`/post`}
										className="flex gap-2 items-end uppercase font-bold text-sm"
									>
										<Rss />
										Tin tức công nghệ
									</Link>
								</li>
								<li className="p-3 hover:bg-red-400 transition-all">
									<Link
										href={`/build-pc`}
										className="flex gap-2 items-end uppercase font-bold text-sm"
									>
										<Wrench />
										Xây dựng cấu hình
									</Link>
								</li>
								<li className="p-3 hover:bg-red-400 transition-all">
									<Link
										href={`/support`}
										className="flex gap-2 items-end uppercase font-bold text-sm"
									>
										<Headset />
										Hỗ trợ
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>

			<div className="container mx-auto mt-2">
				<div className="flex justify-center items-start gap-2">
					<div className="w-3/12">
						<div>
							<ul className="border rounded divide-y divide-solid">
								<li className="text-sm p-2 hover:bg-red-500 hover:text-white transition-all">
									<Link href={`/product-category/laptop-tablet-mobile`}>
										<Laptop className="inline mr-1 align-middle" />
										Laptop, tablet, Mobile
									</Link>
								</li>
								<li className="text-sm p-2 hover:bg-red-500 hover:text-white transition-all">
									<Link href={`/product-category/thiet-bi-luu-tru`}>
										<Usb className="inline mr-1 align-middle" />
										Thiết bị lưu trữ, USB, Thẻ
									</Link>
								</li>
								<li className="text-sm p-2 hover:bg-red-500 hover:text-white transition-all">
									<Link href={`/product-category/may-in-may-cham-cong`}>
										<Printer className="inline mr-1 align-middle" />
										Máy in, máy chấm công
									</Link>
								</li>
								<li className="text-sm p-2 hover:bg-red-500 hover:text-white transition-all">
									<Link href={`/product-category/camera`}>
										<Cctv className="inline mr-1 align-middle" />
										Camera quan sát
									</Link>
								</li>
								<li className="text-sm p-2 hover:bg-red-500 hover:text-white transition-all">
									<Link href={`/product-category/mic-tai-nghe-webcam`}>
										<Headphones className="inline mr-1 align-middle" />
										Mic, tai nghe, webcam
									</Link>
								</li>
								<li className="text-sm p-2 hover:bg-red-500 hover:text-white transition-all">
									<Link href={`/product-category/may-choi-game`}>
										<Gamepad2 className="inline mr-1 align-middle" />
										Máy chơi game
									</Link>
								</li>
								<li className="text-sm p-2 hover:bg-red-500 hover:text-white transition-all">
									<Link href={`/product-category/keyboard-mouse`}>
										<Keyboard className="inline mr-1 align-middle" />
										Phím chuột, ghế game, gear
									</Link>
								</li>
								<li className="text-sm p-2 hover:bg-red-500 hover:text-white transition-all">
									<Link href={`/product-category/monitor`}>
										<Monitor className="inline mr-1 align-middle" />
										Màn hình máy tính
									</Link>
								</li>
								<li className="text-sm p-2 hover:bg-red-500 hover:text-white transition-all">
									<Link href={`/product-category/cooling`}>
										<Fan className="inline mr-1 align-middle" />
										Tản nhiệt PC, cooling,
									</Link>
								</li>
								<li className="text-sm p-2 hover:bg-red-500 hover:text-white transition-all">
									<Link href={`/product-category/linh-kien-may-tinh`}>
										<Cpu className="inline mr-1 align-middle" />
										Linh kiện máy tính
									</Link>
								</li>
								<li className="text-sm p-2 text-center hover:bg-red-500 hover:text-white transition-all">
									<Link href={`/`}>Xem thêm</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="w-9/12">
						<SlidersBanner />
					</div>
				</div>
			</div>
		</div>
	);
}

import Image from "next/image";

function SlidersBanner(...props: any) {
	const sliders = {
		items: [
			{
				image: "/uploads/sliders/slider1.jpg",
				url: "/product-category",
				alt: "slider 1",
			},
			{
				image: "/uploads/sliders/slider1.jpg",
				url: "/product-category",
				alt: "slider 1",
			},
			{
				image: "/uploads/sliders/slider1.jpg",
				url: "/product-category",
				alt: "slider 1",
			},
		],
		width: 1920,
		height: 1080,
	};

	const banners = [
		{
			image: "/uploads/banners/banner1.webp",
			url: "/product-category",
			alt: "slider 1",
		},
		{
			image: "/uploads/banners/banner2.webp",
			url: "/product-category",
			alt: "slider 1",
		},
		{
			image: "/uploads/banners/banner3.webp",
			url: "/product-category",
			alt: "slider 1",
		},
	];

	const orders = [
		{
			name: "Nguyen Thanh Long",
			product: "san pham",
			gender: "male",
		},
		{
			name: "Nguyen Thanh Long",
			product: "san pham",
			gender: "male",
		},
		{
			name: "Nguyen Thanh Long",
			product: "san pham",
			gender: "male",
		},
		{
			name: "Nguyen Thanh Long",
			product: "san pham",
			gender: "male",
		},
		{
			name: "Nguyen Thanh Long",
			product: "san pham",
			gender: "male",
		},
	];

	return (
		<>
			<div className="flex justify-between items-start gap-2">
				<div className="w-2/3">
					<Swiper
						spaceBetween={50}
						slidesPerView={1}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
					>
						{sliders.items.map((slider: any, index: number) => (
							<SwiperSlide key={index}>
								<Image
									src={slider.image}
									alt={slider.alt}
									width={sliders.width}
									height={sliders.height}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="w-1/3">
					<div className="border border-red-500 rounded">
						<h3 className="py-3 px-2 bg-red-500 text-bold text-white text-center uppercase font-bold">
							khách hàng của chúng tôi
						</h3>
						<ul className="divide-y divide-solid divide-red-500">
							{orders.map((order: any, index: number) => (
								<li key={index} className="p-2 text-slate-500 text-sm">
									{order.name + " da mua " + order.product}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="flex">
				{banners.map((banner: any, index: number) => (
					<div key={index} className="w-1/3">
						<Image
							className="w-full"
							src={banner.image}
							alt={banner.alt}
							width={500}
							height={500}
						/>
					</div>
				))}
			</div>
		</>
	);
}
