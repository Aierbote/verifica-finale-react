export function Todo({
	id,
	title,
	completed,
}: {
	id: string;
	title: string;
	completed: boolean;
}) {
	return (
		<li key={id}>
			<div>
				<input id={id} type="checkbox" checked={completed} />
				<label htmlFor={id}>{title}</label>
			</div>
			<button> Delete</button>
		</li>
	);
}
