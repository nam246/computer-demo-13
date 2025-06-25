import Image from "next/image";
import Link from "next/link";

export default function PostStyle1() {
	const posts = [
		{
			title: "His mother had always taught him",
			excerpt:
				"His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto.",
			description: "",
			slug: "",
			thumbnail_url: "/uploads/posts/pexels-cup-of-couple-6956917.jpg",
		},
		{
			title: "He was an expert but not in a discipline",
			excerpt:
				"He was an expert but not in a discipline that anyone could fully appreciate.",
			description: "",
			slug: "",
			thumbnail_url: "/uploads/posts/pexels-cottonbro-6804069.jpg",
		},
		{
			title: "Dave watched as the forest burned up on the hill.",
			excerpt:
				"Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets.",
			description:
				"Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
			slug: "",
			thumbnail_url: "/uploads/posts/pexels-rdne-8279493.jpg",
		},
		{
			title: "All he wanted was a candy bar.",
			excerpt:
				"All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request.",
			description: "",
			slug: "",
			thumbnail_url: "/uploads/posts/pexels-thisisengineering-3862627.jpg",
		},
		{
			title: "Hopes and dreams were dashed that day.",
			excerpt:
				"Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen.",
			description: "",
			slug: "",
			thumbnail_url: "/uploads/posts/pexels-waterhouse-3665444.jpg",
		},
	];

	return (
		<div>
			<div className="container mx-auto">
				<div className="flex gap-5">
					<div className="flex-1">
						<Link
							className="block relative rounded-md shadow overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
							href={posts[0].slug}
						>
							<figure className="w-full max-h-[40rem] overflow-hidden">
								<Image
									className="w-full object-cover"
									src={posts[0].thumbnail_url}
									alt={posts[0].title}
									width={620}
									height={200}
								/>
							</figure>
							<div className="p-5">
								<h3 className="font-bold text-xl">{posts[0].title}</h3>
								<p className="text-slate-500">{posts[0].excerpt}</p>
							</div>
						</Link>
					</div>
					<div className="flex-1">
						<div className="grid grid-cols-2 grid-rows-2 gap-3">
							{posts.slice(1).map((item, index) => (
								<Link
									className="block relative rounded-md shadow overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
									href={item.slug}
									key={index}
								>
									<figure className="w-full max-h-[500px] overflow-hidden">
										<Image
											src={item.thumbnail_url}
											alt={item.title}
											width={500}
											height={200}
										/>
									</figure>
									<div className="p-5">
										<h3 className="font-bold text-xl">{item.title}</h3>
										<p className="text-slate-500 line-clamp-2">{item.excerpt}</p>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
