import { useState } from 'react';
import { rollDice } from './helpers';

type Dice = {
	sides: number;
	amount: number;
	drop: [number, boolean];
	for?: string;
};
type DiceToss = {
	results: number[];
	total: number;
	for?: string;
};

export function Dice() {
	const [dice, setDice] = useState<Dice>({
		sides: 6,
		amount: 1,
		drop: [0, true]
	});
	const [diceHistory, setDiceHistory] = useState<DiceToss[]>([]);

	const handleToss = (e: React.MouseEvent): void => {
		e.preventDefault();
		const newRoll = {
			...rollDice(dice.sides, dice.amount, dice.drop),
			for: dice.for
		};
		setDiceHistory((prevState) => {
			return [...prevState, newRoll];
		});
	};
	return (
		<div className="bg-black bg-opacity-75">
			<div className="hover:shadow-lg hover:shadow-white my-2 p-4 rounded-lg bg-slate-400 text-black select-none">
				<span className="animate-pulse font-bold"> Roll </span>
				<input
					type="number"
					className="mx-2 w-10 bg-black text-white text-lg"
					min={1}
					value={dice.amount}
					onChange={(e) =>
						setDice({ ...dice, amount: Number(e.currentTarget.value) })
					}
					onClick={(e) => e.stopPropagation()}
				/>
				<span className="text-lg font-bold">D</span>
				<input
					type="number"
					className="w-10 bg-black text-white text-lg"
					min={2}
					value={dice.sides}
					onChange={(e) =>
						setDice({ ...dice, sides: Number(e.currentTarget.value) })
					}
					onClick={(e) => e.stopPropagation()}
				/>
				<p className="flex mt-2">
					drop
					<select
						className="ml-2 w-18 bg-black text-white text-lg"
						value={dice.drop[1] ? 'higher' : 'lower'}
						onChange={(e) =>
							setDice({
								...dice,
								drop: [dice.drop[0], e.currentTarget.value === 'higher']
							})
						}
						onClick={(e) => e.stopPropagation()}
					>
						<option value="higher">higher</option>
						<option value="lower">lower</option>
					</select>
					<input
						type="number"
						className="ml-2 w-10 bg-black text-white text-lg"
						min={0}
						max={dice.amount - 1}
						value={dice.drop[0]}
						onChange={(e) =>
							setDice({
								...dice,
								drop: [Number(e.currentTarget.value), dice.drop[1]]
							})
						}
						onClick={(e) => e.stopPropagation()}
					/>
				</p>
				<p className="flex mt-2">
					for:
					<textarea
						className="min-w-[18ch] min-h-[2rem] mx-2 px-2 bg-black text-white text-lg"
						value={dice.for ?? ''}
						onChange={(e) => setDice({ ...dice, for: e.currentTarget.value })}
						onClick={(e) => e.stopPropagation()}
					/>
				</p>
				<button
					className="block w-full mt-4 rounded-lg bg-black shadow-md shadow-red-400 text-white"
					onClick={handleToss}
				>
					Roll!
				</button>
			</div>
			<div
				className="select-none hover:shadow-lg hover:shadow-red-900 my-1 p-1 rounded-lg bg-blood-400 text-red-100 text-center font-bold"
				onClick={() => setDiceHistory([])}
			>
				Clear results
			</div>
			<div className="my-4 h-[68vh] overflow-auto text-center">
				<div className="flex flex-col-reverse">
					{diceHistory?.map((toss, index) => (
						<p className="animate-shine break-all text-teal-200" key={index}>
							{toss.results.join(', ')}{' '}
							<span className="text-lg font-bold"> = {toss.total} </span>
							{toss.for && 'for ' + toss.for}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
