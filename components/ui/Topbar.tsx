import Link from "next/link";
import { HeartHandshake, Newspaper, Headset } from "lucide-react";

export default function Topbar(props: any) {
	return (
		<div id="top-bar" className="top-bar py-2 bg-red-500 text-white">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="flex justify-start gap-2 top-bar-left">
						<div className="text-sm mr-1 py-1 px-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-400 shadow">
							Zalo
						</div>
						<div>
							<Link
								href="tel:+0984041242"
								className="flex items-center gap-2 text-sm py-1 px-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-400 shadow"
							>
								<Headset size={14} /> Mua hàng <b>0987654321</b>
							</Link>
						</div>
					</div>

					<div className="flex justify-end items-center gap-2 top-bar-right">
						<div className="py-1 px-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-400 shadow">
							<Link href="tel:+0984041242" className="flex items-center gap-2 text-sm">
								<Headset size={14} /> Kỹ thuật <b>0987654321</b>
							</Link>
						</div>
						<div className="text-sm py-1 px-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-400 shadow">
							<a href="tel:+0984041242" className="flex items-center gap-2 text-sm">
								<Headset size={14} /> Bảo hành <b>0987654321</b>
							</a>
						</div>
						<div className="text-sm top-bar-item">
							<a href="/post" className="text-xs">
								<Newspaper />
								Tin tức
							</a>
						</div>
						<div className="text-sm top-bar-item">
							<a href="/recruitment" className="text-xs">
								<HeartHandshake />
								Tuyển dụng
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
