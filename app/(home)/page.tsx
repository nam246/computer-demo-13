import Navigation from "@/components/ui/Navigation";
import ProductStyle7 from "@/components/widget/ProductStyle7";
import ProductStyle6 from "@/components/widget/ProductStyle6/index";
import Banner from "@/components/widget/Banner";
import PostStyle1 from "@/components/widget/PostStyle1";

import { Product } from "@/lib/types";

export default async function HomePage() {
	const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}/api/products`);
	const data = await response.json();
	const products: Product[] = data.docs;

	return (
		<>
			<Navigation />
			<ProductStyle7 products={products} />
			<ProductStyle6 title="PC Gaming" products={products.filter((product) => (product.categories === 2))} />
			<Banner src="/uploads/banners/banner4.webp" />
			<ProductStyle6 title="CPU" products={products.filter((product) => (product.categories === 1))} />
			<PostStyle1 />
		</>
	);
}
