type PageProps = {
	params: { slug: string };
};

export default async function SingleProductPage({ params }: PageProps) {
	return (
		<div>
			<div className="container mx-auto">
				<h1>{params.slug}</h1>
			</div>
		</div>
	);
}
