export default function Loading() {
	return (
		<div className="container mx-auto py-10 animate-pulse">
			<div className="w-1/2 h-10 bg-gray-200 rounded mb-4" />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
				{Array.from({ length: 8 }).map((_, i) => (
					<div key={i} className="border rounded-lg p-4 shadow bg-white">
						<div className="w-full h-48 bg-gray-200 rounded mb-4" />
						<div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
						<div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
						<div className="h-8 bg-gray-300 rounded w-24" />
					</div>
				))}
			</div>
		</div>
	);
}
