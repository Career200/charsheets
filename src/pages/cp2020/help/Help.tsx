import { useState } from 'react';
import { Dice } from './Dice';

export function Help() {
	const [showDice, setShowDice] = useState(false);
	return (
		<>
			<div className="fixed right-4 p-1 bg-gray-900 rounded-lg">
				{showDice ? (
					<>
						<button
							className="p-1 w-full rounded-lg bg-violet-800 text-white"
							onClick={() => setShowDice(false)}
						>
							hide panel
						</button>
						<div className="h-[calc(100vh-3.5rem)] min-w-[250px] flex flex-col flex-nowrap">
							<Dice />
						</div>
					</>
				) : (
					<button
						className="p-2 bg-violet-800 rounded-lg text-white font-bold"
						onClick={() => setShowDice(true)}
					>
						show dice
					</button>
				)}
			</div>
		</>
	);
}
