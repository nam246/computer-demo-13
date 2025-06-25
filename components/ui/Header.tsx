import Image from "next/image";
import Link from "next/link";

import { Phone, ShoppingBasket } from "lucide-react";

export default function Header() {
	return (
		<header className="py-3">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="logo w-3/12">
						<Link href={`/`}>
							<Image src={`/logo.webp`} width={171} height={100} alt="logo" />
						</Link>
					</div>

					<div className="search-bar w-5/12">
						<div className="border border-red-500 rounded min-w-full p-3 relative">
							<form action="">
								<input
									className="w-full outline-none"
									type="text"
									name=""
									id=""
									placeholder="Nhập tên sản phẩm tìm kiếm?"
								/>
							</form>
							<button className="absolute right-0 top-0 p-3">
								<i className="fa-solid fa-magnifying-glass"></i>
							</button>
						</div>
					</div>

					<div className="header-items flex justify-end items-center gap-5 w-4/12">
						<Link href={`tel:0984041242`} className="hotline flex items-center border border-red-500 rounded relative min-h-[4.5rem]">
							<div className="h-10 w-10 absolute -left-4 top-3 border border-red-500 rounded-full p-2 bg-white">
								<Phone color="rgb(239 68 68)" />
							</div>
							<div className="pl-8 pr-2 py-2">
								<p className="font-bold">Hotline</p>
								<p className="text-red-500 font-bold">0984041242</p>
							</div>
						</Link>
						<Link href={`/gio-hang`} className="cart hotline flex items-center border border-red-500 rounded relative min-h-[4.5rem]">
							<div className="h-10 w-10 absolute -left-4 top-3 border border-red-500 rounded-full p-2 bg-white">
								<ShoppingBasket color="rgb(239 68 68)" />
							</div>
							<div className="pl-8 pr-2 py-2">
								<p className="text-sm font-bold">Giỏ hàng</p>
								<p className="text-sm">0 sản phẩm</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
