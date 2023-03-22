export const Loading = () => {
	return (
		<div className="h-full flex flex-col justify-center items-center">
			<p className="text-center mb-2">Loading data...</p>
			<progress className="progress w-72"></progress>
		</div>
	);
}