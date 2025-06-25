import Navigation from "@/components/ui/Navigation";
import ProductStyle7 from "@/components/widget/ProductStyle7";
import ProductStyle6 from "@/components/widget/ProductStyle6";
import Banner from "@/components/widget/Banner";
import PostStyle1 from "@/components/widget/PostStyle1";

export default async function HomePage() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/products`,
		{
			cache: "no-store", // nếu muốn luôn lấy dữ liệu mới
		}
	);
	const data = await response.json();
	const products = data.products;

	return (
		<>
			<Navigation />
			<ProductStyle7 products={products} />
			<ProductStyle6 products={products} />
			<Banner src="/uploads/banners/banner4.webp" />
			<ProductStyle6 products={products} />
			<PostStyle1 />
		</>
	);
}
