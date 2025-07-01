type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
import { Product } from "@/lib/types";
import { notFound } from "next/navigation";
import ProductCard from "./ProductCard";

const REQUEST_URL = process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL;

async function getProductsByCategorySlug(slug: string) {
	const QUERY_PARAMS = `/api/products`;
	const response = await fetch(REQUEST_URL + QUERY_PARAMS, {
		cache: "force-cache",
	});
	const data = await response.json();

	return data.data;
}

export async function generateMetadata(props: {
	params: Params;
	searchParams: SearchParams;
}) {
	const params = await props.params;
	const searchParams = await props.searchParams;
	const slug = params.slug;
	const query = searchParams.query;
}

export default async function ProductCategoryPage(props: {
	params: Params;
	searchParams: SearchParams;
}) {
	const params = await props.params;
	const searchParams = await props.searchParams;
	const slug = params.slug;
	const query = searchParams.query;

	const products: Product[] = await getProductsByCategorySlug(slug);
	if (!products || products.length === 0) return notFound();

	return (
		<div className="container mx-auto py-10">
			<h1 className="text-2xl font-bold mb-6 capitalize">
				Danh mục: {params.slug}
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
