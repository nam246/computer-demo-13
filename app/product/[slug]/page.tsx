type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
import Image from "next/image";

const REQUEST_URL = process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL + "/api/products/";

async function getProductBySlug(slug: string) {
	const QUERY_PARAMS = `?where[slug][equals]=${slug}`;
	const response = await fetch(REQUEST_URL + QUERY_PARAMS, {
		cache: "force-cache",
	});
	const data = await response.json();
	return data.docs[0];
}

export default async function SingleProductPage(props: {
	params: Params;
	searchParams: SearchParams;
}) {
	const params = await props.params;
	const searchParams = await props.searchParams;
	const slug = params.slug;
	const query = searchParams.query;
	const product = await getProductBySlug(slug);

	if (product) {
		return (
			<div className="container mx-auto py-10">
				<div className="flex flex-col md:flex-row gap-8">
					<div className="flex-1">
						<h1 className="text-3xl font-bold mb-4">{product.title}</h1>
						<figure>
							<Image
								src={REQUEST_URL + product.image?.url}
								alt={product.title}
								width={500}
								height={500}
							/>
						</figure>
						<div className="text-2xl text-red-500 font-semibold mb-2">
							{product.price.toLocaleString()}₫
						</div>
						<p className="mb-6 text-gray-700">{product.description}</p>
						<button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
							Mua ngay
						</button>
					</div>
				</div>
			</div>
		);
	}
}
