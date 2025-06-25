type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

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

	return (
		<div>
			<div className="container mx-auto">{params.slug + query}</div>
		</div>
	);
}
