const groupNames = [
	{ modifier: 0, name: 'LIGHT' },
	{ modifier: -1, name: 'SERIOUS' },
	{ modifier: -2, name: 'CRITICAL' },
	{ modifier: -3, name: 'MORTAL0' },
	{ modifier: -4, name: 'MORTAL1' },
	{ modifier: -5, name: 'MORTAL2' },
	{ modifier: -6, name: 'MORTAL3' },
	{ modifier: -7, name: 'MORTAL4' },
	{ modifier: -8, name: 'MORTAL5' },
	{ modifier: -9, name: 'MORTAL6' }
];

export default function Healthbar({
	currentChecked,
	callback
}: {
	currentChecked: number;
	callback: (checked: number) => void;
}) {
	const groups = Array.from({ length: 10 }, (_, index) => {
		const groupNumber = index + 1;
		return {
			groupNumber,
			text: groupNames[index].name,
			subtext: groupNames[index].modifier
		};
	});

	return (
		<>
			<p className="flex items-center">
				Healthy?
				<input
					className="h-5 w-5 cursor-pointer"
					type="checkbox"
					checked={currentChecked === 0}
					onChange={() => callback(0)}
				/>
			</p>
			<div className="mb-2 flex flex-wrap justify-center gap-4">
				{groups.map((group) => (
					<div
						className="flex flex-col items-center py-1 px-2 bg-black"
						key={group.groupNumber}
					>
						<p>{group.text}</p>
						<div className="flex gap-2">
							{Array.from({ length: 4 }).map((_, index) => {
								const checkboxNumber = group.groupNumber * 4 + index - 3;
								return (
									<input
										className="h-5 w-5 cursor-pointer"
										key={index}
										type="checkbox"
										checked={checkboxNumber <= currentChecked}
										onChange={() => callback(checkboxNumber)}
									/>
								);
							})}
						</div>
						<p>SAVE {group.subtext}</p>
					</div>
				))}
			</div>
		</>
	);
}
