export default function ProductcategoryPage({
	params,
}: {
	params: {
		id: string;
	};
}) {
	return (
		<div>
			<div className="container mx-auto">
                <h1>{params.id}</h1>
            </div>
		</div>
	);
}
