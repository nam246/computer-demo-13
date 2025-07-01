export default function Loading() {
	return (
		<div className="container mx-auto p-4 animate-pulse">
			<div className="flex flex-col md:flex-row gap-8">
				<div className="flex-1">
					<div className="bg-gray-200 rounded w-3/4 h-8 mb-4"></div>
					<div className="bg-gray-200 rounded w-full h-[300px] mb-6"></div>
					<div className="bg-gray-200 rounded w-1/3 h-6 mb-4"></div>
					<div className="bg-gray-200 rounded w-full h-20 mb-6"></div>
					<div className="bg-gray-300 rounded w-32 h-10"></div>
				</div>
			</div>
		</div>
	);
}
