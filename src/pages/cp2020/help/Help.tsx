import { useState } from 'react';
import { Dice } from './Dice';

export function Help() {
	const [showDice, setShowDice] = useState(false);
	return (
		<>
			<div className="fixed w-full h-12 flex justify-between flex-row-reverse p-1 bg-olive-800 font-mono">
				<div>
					{showDice ? (
						<>
							<button
								className="p-1 w-full rounded-lg bg-blood-700 text-white"
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
							className="p-2 bg-blood-600 rounded-lg text-white font-bold"
							onClick={() => setShowDice(true)}
						>
							show dice
						</button>
					)}
				</div>
			</div>
			<div className="pt-12 font-space">
				<h2 className="px-4 font-major text-lg text-terminal-400">Battle</h2>
				<div className="p-2 flex flex-wrap">
					<div className="shrink-0">
						<h4 className="text-terminal-400">Actions</h4>
						<ul className="list-decimal px-8">
							<li>Move up to (3xMA) in meters</li>
							<li>Attack up to max RoF/Melee attack</li>
							<li>Dodge (from Melee)</li>
							<li>Parry (deflect damage onto something)</li>
							<li>Escape a hold/trap</li>
							<li>Aim (+1 to hit up to 3 rounds)</li>
							<li>Reload/Change weapon</li>
							<li>Mount/dismount vehicle</li>
							<li>Repair/Give medical aid</li>
							<li>Perform a non-combat task </li>
						</ul>
					</div>
					<div className="basis-40 grow flex flex-col gap-4">
						<h4 className="text-terminal-400">Tips</h4>
						<p>
							You may perform more than one action at -3 penalty to each
							successive action
						</p>
						<p>
							Two weapon attacks can be made at -3 to hit penalty on{' '}
							<strong>both</strong> weapos used
						</p>
						<p>
							Ambushers gain a +5 to hit if the ambush is successful: oppenent
							is unaware of your presence/intention to attack (opposing{' '}
							<span className="text-terminal-400 font-bold">stealth</span> vs{' '}
							<span className="text-terminal-400 font-bold">awareness</span>)
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
