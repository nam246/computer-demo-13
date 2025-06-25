import Image from "next/image";

export default function Banner({ src }: { src: string }) {
	return (
		<div className="container mx-auto">
			<figure className="w-full relative group overflow-hidden">
				<Image
					className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
					src={src}
					alt="banner"
					width={1900}
					height={100}
				/>
				{/* Hiệu ứng gương */}
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
			</figure>
		</div>
	);
}
