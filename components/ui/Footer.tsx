import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { MotionFadeUp } from "@/components/Animate/MotionFadeUp";

export default function Footer() {
	return (
		<footer className="bg-slate-500 text-white py-5 mt-10">
			<div className="container mx-auto">
				<MotionFadeUp className="flex items-center justify-center gap-10 divide-x bg-red-500 p-5 rounded-tl-[50px] rounded-br-[50px] -translate-y-[50%]">
					<div className="flex-1 flex flex-col items-center">
						<div className="uppercase text-lg font-bold">hỗ trợ nhanh chóng</div>
						<p>liên hệ nhanh chóng</p>
					</div>
					<div className="flex-1 flex flex-col items-center">
						<div className="uppercase text-lg font-bold">bảo hành 1 đổi 1</div>
						<p>trong 30 ngày đầu tiên</p>
					</div>
					<div className="flex-1 flex flex-col items-center">
						<div className="uppercase text-lg font-bold">vận chuyển</div>
						<p>giao hàng tận nơi</p>
					</div>
				</MotionFadeUp>
			</div>
			<div className="container mx-auto grid grid-cols-4 grid-rows-2 gap-5 py-10">
				<MotionFadeUp className="">
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and scrambled it to
						make a type specimen book.
					</p>
				</MotionFadeUp>

				<MotionFadeUp className="">
					<h3 className="font-bold text-2xl mb-3">Về chúng tôi</h3>
					<ul className="text-sm">
						<li className="hover:text-red-500 uppercase mb-2">
							<Link href={`/`}>Hệ thống showroom</Link>
						</li>
						<li className="hover:text-red-500 uppercase mb-2">
							<Link href={`/`}>Tin tức công nghệ</Link>
						</li>
						<li className="hover:text-red-500 uppercase mb-2">
							<Link href={`/`}>Xây dựng cấu hình</Link>
						</li>
						<li className="hover:text-red-500 uppercase mb-2">
							<Link href={`/`}>Hỗ trợ</Link>
						</li>
					</ul>
				</MotionFadeUp>

				<MotionFadeUp className="">
					<h3 className="font-bold text-2xl mb-3">Hỗ trợ khách hàng</h3>
					<ul className="text-sm">
						<li className="hover:text-red-500 uppercase mb-2">
							<Link href={`/`}>Hệ thống showroom</Link>
						</li>
						<li className="hover:text-red-500 uppercase mb-2">
							<Link href={`/`}>Tin tức công nghệ</Link>
						</li>
						<li className="hover:text-red-500 uppercase mb-2">
							<Link href={`/`}>Xây dựng cấu hình</Link>
						</li>
						<li className="hover:text-red-500 uppercase mb-2">
							<Link href={`/`}>Hỗ trợ</Link>
						</li>
					</ul>
				</MotionFadeUp>

				<MotionFadeUp className="">
					<h3 className="font-bold text-2xl mb-3">Hỗ trợ khách hàng</h3>
					<ul className="text-sm">
						<li className="hover:text-red-500 uppercase mb-2">
							<Link href={`/`}>Hệ thống showroom</Link>
						</li>
						<li className="hover:text-red-500 uppercase mb-2">
							<Link href={`/`}>Tin tức công nghệ</Link>
						</li>
						<li className="hover:text-red-500 uppercase mb-2">
							<Link href={`/`}>Xây dựng cấu hình</Link>
						</li>
						<li className="hover:text-red-500 uppercase mb-2">
							<Link href={`/`}>Hỗ trợ</Link>
						</li>
					</ul>
				</MotionFadeUp>

				<MotionFadeUp className="">
					<p>
						<MapPin className="inline mr-1 align-middle" />
						36 D5, Phường 25, Quận Bình Thạnh, TP Hồ Chí Minh
					</p>
					<p>
						<Phone className="inline mr-1 align-middle" /> 098 40 41 242
					</p>
					<p>
						<Mail className="inline mr-1 align-middle" /> trungvuhoang2005@gmail.com
					</p>
				</MotionFadeUp>

				<MotionFadeUp className="">
					<h3 className="font-bold text-2xl mb-3">newsletter</h3>
					<form action="">
						<label htmlFor="email">đăng ký nhận thông tin</label>
						<input
							className="p-5 rounded-tl-md rounded-bl-md outline-none"
							type="email"
							placeholder="email"
						/>
						<button className="p-5 rounded-tr-md rounded-br-md bg-red-500 text-white">
							gửi
						</button>
					</form>
				</MotionFadeUp>
			</div>
		</footer>
	);
}
