export default function Skillbox({
	name,
	value,
	onChange = (e) => console.log(e.currentTarget.value),
	inputAttr,
	inputClass
}: {
	name: string;
	value: number;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputAttr?: React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>;
	inputClass?: string;
}) {
	return (
		<div className="hover:outline hover:outline-orange-600 p-2 border-2 border-orange-900">
			<p>
				{name}:{' '}
				<input
					type="number"
					className={`w-12 pl-2 bg-black text-lg text-blue-200, ${inputClass}`}
					value={value}
					onChange={onChange}
					{...inputAttr}
				/>
			</p>
		</div>
	);
}
