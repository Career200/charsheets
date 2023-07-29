import { useState } from 'react';
import { Dice } from './Dice';
import BattleList from './BattleList';

export function Help() {
	const [showDice, setShowDice] = useState(false);
	const [showBattle, setShowBattle] = useState(false);
	const [battleVisible, setBattleVisible] = useState(true);
	const [otherVisible, setOtherVisible] = useState(true);

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
				<div>
					{showBattle ? (
						<>
							<button
								className="p-1 w-full rounded-lg bg-blood-700 text-white"
								onClick={() => setShowBattle(false)}
							>
								hide panel
							</button>
							<div className="h-[calc(100vh-3.5rem)] min-w-[250px] flex flex-col flex-nowrap">
								<BattleList />
							</div>
						</>
					) : (
						<button
							className="p-2 bg-blood-600 rounded-lg text-white font-bold"
							onClick={() => setShowBattle(true)}
						>
							show FNFF tables
						</button>
					)}
				</div>
			</div>
			<div className="pt-12 font-space">
				<h2
					className="hover:bg-blood-800 px-4 py-2 font-major text-xl text-terminal-400 cursor-pointer"
					onClick={() => setBattleVisible(!battleVisible)}
				>
					Battle
				</h2>
				{battleVisible && (
					<div className="p-2 flex flex-wrap gap-2">
						<div className="shrink-0 basis-80 p-1 outline outline-amber-900">
							<h4 className="text-terminal-400">Actions</h4>
							<ul className="list-decimal pt-4 px-8">
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
						<div className="shrink-0 basis-80 p-1 outline outline-amber-900">
							<h4 className="text-terminal-400">Brawling/Martial Attacks</h4>
							<ul className="list-decimal pt-4 px-8">
								<li>Strike - 1D6/2+Mod</li>
								<li>Kick - 1D6+Mod</li>
								<li>Block</li>
								<li>Parry</li>
								<li>Disarm</li>
								<li>Grapple</li>
								<li>
									Throw - to prone, 1D6+Mod, stun save with <i>-2</i>
								</li>
								<li>Hold - immobilize foe</li>
								<li>
									Choke - 1D6 per turn (attacker BT in <i>RED</i>)
								</li>
								<li>
									Sweep/Trip - to prone, -2 on foes next attack, +2 to
									attacker's next attack
								</li>
								<li>Escape - escape hold</li>
							</ul>
						</div>
						<div className="basis-80 grow border-l-2 border-terminal-700 pl-1 flex flex-col gap-4">
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
								<span className="text-blood-400 font-bold"> OR</span> opponent's
								attention is on another situation, requiring great concentration
								(like another attack)
								<br />
								<span className="font-bold">Important</span>: Initiative is not
								modified
							</p>
						</div>
						<div className="basis-80 grow border-l-2 border-terminal-700 pl-1 flex flex-col gap-4">
							<h4 className="text-terminal-400 font-bold text-lg">Damage</h4>
							<div className="flex flex-col gap-1">
								<p>
									<i>Hit Location</i>: take <i>-4</i>to attemt to shoot a
									specific location, otherwise use <i>hit chart</i>.{' '}
									<b>Remember: HEADSHOTS DO 2x damage</b>
								</p>
								<p>
									<i>Armor SP</i>: stopping power - separate on body areas.{' '}
									<b>Subtract SP from damage</b> - 0 damage is possible.
								</p>
								<p>
									<i>Hard</i> and <i>Soft</i> armors - no more than 3 layers,
									not more than 1 Hard
								</p>
								<p>
									<i>AP attacks</i> - AP rounds treat all armor as 1/2, but do
									1/2 damage, and sharp melee weapons treat most soft armors as
									1/2 SP (look for a mark on <i>Armor Table</i>)
								</p>
								<p>
									<i>Staged Penetration</i> - Armor deteriorates after
									penetrating damage (<i>-1SP per attack</i>)
								</p>
								<p>
									<i>Cover</i> - see <i>Common Cover SPS</i>
								</p>
								<p>
									<i>BTM</i> - subtract from damage, but never {'<'}1
								</p>
								<p>
									<i>Wounds</i> - <b>LIGHT</b> - no penalties, <b>SERIOUS</b> -{' '}
									<i>-2REF</i>, <b>CRITICAL</b> - <i>REF</i>, <i>INT</i>,{' '}
									<i>COOL</i> reduced by 1/2 round up, <b>MORTAL</b> - divide by
									3
								</p>
								<p>
									<i>Limb loss</i> - lose limb at 8 damage from a single attack,
									immediate <i className="text-blood-400">DEATH SAVE</i> at{' '}
									<b>MORTAL 0</b>, Death on lost head
								</p>
							</div>
						</div>
						<div className="basis-80 grow border-l-2 border-terminal-700 pl-1 flex flex-col gap-4">
							<h4 className="text-terminal-400 font-bold text-lg">
								Stun/Shock/<span className="text-blood-400">Death</span> saves
							</h4>
							<div className="p-4">
								<p>
									Every time a character takes damage, he must make a{' '}
									<i>save</i> against the effects of pain, shock, fear and blood
									loss.
								</p>
								<p>
									<span className="text-blood-400 font-bold text-lg">
										A failed save
									</span>
									means the character is <b>out of combat</b> <br />A{' '}
									<i>Stun/Shock</i> roll can be recovered from by rolling a
									successful check in a subsequent turn
								</p>
								<br />
								<p>
									When in <i className="text-blood-400">Mortal wound</i>{' '}
									territory, every turn requires a{' '}
									<b className="font-blood">Death save</b> <br />
									<span className="text-blood-400 font-bold text-lg">
										A failed save{' '}
									</span>
									means the character{' '}
									<span className="text-blood-400 font-bold text-lg">dies</span>{' '}
									<i>at the and of that turn</i>
								</p>
								<p>
									If the character is not dead, his only hope is
									<b> stabilization</b>. Drugs, surgery, wound dressing will
									allow the character to stop the <i>Death saves</i>.
									Stabilization can be attempted by anyone other than the
									patient himself. Stabilization is made as{' '}
									<b>TECH+any Medical skill+1D10</b>, and to be successful it
									must be above the total number of
									<i> damage points</i> the patient has taken
								</p>
							</div>
						</div>
						<div className="basis-80 grow border-l-2 border-terminal-700 pl-1 flex flex-col gap-4">
							<h4 className="text-terminal-400 font-bold text-lg">
								Ranged weapons
							</h4>
							<div>
								<p>
									<b className="ml-4 p-2 border-2 font-bold border-blood-400">
										REF+WEAPON STAT+1D10
									</b>
									equal to
									<br />
									<br /> <i>hit number</i>:{' '}
									<b className="flex flex-col ml-4 p-2 border-2 font-bold border-blood-400">
										<span className="flex justify-between">
											<span>POINT BLANK:</span>
											<span>{'<'}1/2 meter</span>
											<span>
												<i className="text-terminal-400">10</i>
											</span>
										</span>
										<span className="flex justify-between">
											<span>CLOSE: </span> <span>1/4 range</span>
											<i className="text-terminal-400">15</i>
										</span>
										<span className="flex justify-between">
											<span>MEDIUM: </span>
											<span>1/2 range</span>
											<i className="text-terminal-400">20</i>
										</span>
										<span className="flex justify-between">
											<span>LONG: </span>
											<span>1x range</span>
											<i className="text-terminal-400">25</i>
										</span>
										<span className="flex justify-between">
											<span>EXTREME: </span>
											<span>2x range</span>
											<i className="text-terminal-400">30</i>
										</span>
									</b>
								</p>
								<div>
									<b>Automatic weapons</b> can jam for 1D6 turns on fumbled
									attacks
									<br />
									<span className="block text-lg text-blood-400">
										Auto-fire rules
									</span>
									<hr />
									<i className="font-bold">THREE-ROUND BURST</i> gives <b>+3</b>{' '}
									to hit at <b>CLOSE</b> or <b>MEDIUM</b> ranges. Single to-hit
									roll, the amount of connected bullets is <b>1D6/2</b>
									<hr />
									<i className="font-bold">FULL-AUTO</i> - at <b>CLOSE</b> range{' '}
									<i>+1</i> per 10 rounds (as in weapon ROF), <i>-1</i> at{' '}
									<b>OTHER</b> ranges. For every point above difficulty, one
									bullet hits.
									<br />
									Attacking multiple targets - divide ROF by total targets(round
									down), then roll individually.
									<hr />
									<i className="font-bold">SUPPRESSIVE FIRE</i> - create a{' '}
									<b>fire zone</b>. Targets moving through it have to make{' '}
									<b>REF+Athletics+1D10</b>, taking 1D6 bullets on{' '}
									<span className="text-blood-400">fail</span>. Save number is{' '}
									<b>Rounds/width(meters)</b>
								</div>
							</div>
						</div>
						<div className="basis-80 grow border-l-2 border-terminal-700 pl-1 flex flex-col gap-4">
							<h4 className="text-terminal-400 font-bold text-lg">
								Special ranged weapons
							</h4>
							<p>
								Include <b>Airguns</b> with <b>paint</b> or <b>poison/drugs</b>{' '}
								or <b>acid</b>, <b>Tasers</b>, <b>Dart/Needle guns</b>,{' '}
								<b>Power Squirtguns</b>,{' '}
								<b>Bows, Crossbows, Spears, Throwing stars</b>
								<br />
								<br />
								<i>Beam weapons</i> like <b>Lasers</b> and <b>Microwavers</b>{' '}
								are special, too
								<br />
								<br />
								So are <i>Area Effect weapons</i> like shotguns, grenades,
								explosives, flamethrowers, missiles and mines
							</p>
						</div>
						<div className="basis-80 grow border-l-2 border-terminal-700 pl-1 flex flex-col gap-4">
							<h4 className="text-terminal-400 font-bold text-lg">
								Melee Attacks
							</h4>
							<div className="flex flex-col gap-2">
								<p>
									In Melee, your opponent is a <i>person</i>, not a{' '}
									<i>target</i>. That's why the attack must be{' '}
								</p>
								<b className="mx-8 p-2 border-2 font-bold border-blood-400">
									<span className="text-terminal-400">Attacker</span>{' '}
									REF+SKILL+1D10 <br /> vs
									<br />
									<span className="text-terminal-400">Defender</span>{' '}
									REF+SKILL+1D10
								</b>
								<p>
									<b>SKILL</b> is <i>Martial art</i>, <i>Melee</i>,{' '}
									<i>Fencing</i>, <i>Brawling</i>, etc. vs <i>Dodge</i> or{' '}
									<i>Athletics</i>
								</p>
							</div>
							<p>
								<b>Martial Arts</b> are pretty spacial. Every MA has a{' '}
								<b>key attack</b>, that recieves a bonus to hit <b>and</b> to
								damage
							</p>
							<p>
								<b>Dodge</b> gives your opponent <i>-2</i> to hit
							</p>
							<p>
								<b>Parry</b> - damage goes to the parrying object first (bladed
								weapons avoid damage at a roll {'<'}9 on 1D10)
							</p>
							<p>
								<b>Melee Damage</b> is modified with BT:{' '}
								<b className="flex flex-col ml-4 p-2 border-2 font-bold border-blood-400">
									<span className="flex justify-between">
										<span>BT(1-2) - VERY WEAK:</span>
										<span>
											<i className="text-terminal-400">-2</i>
										</span>
									</span>
									<span className="flex justify-between">
										<span>BT(3-4) - WEAK: </span>
										<i className="text-terminal-400">-1</i>
									</span>
									<span className="flex justify-between">
										<span>BT(5-6) - AVERAGE: </span>
										<i className="text-terminal-400">0</i>
									</span>
									<span className="flex justify-between">
										<span>BT(7-8) - STRONG: </span>
										<i className="text-terminal-400">+1</i>
									</span>
									<span className="flex justify-between">
										<span>BT(9-10) - VERY STRONG: </span>
										<i className="text-terminal-400">+2</i>
									</span>
									<span className="flex justify-between">
										<span>BT (11-12): </span>
										<i className="text-terminal-400">+4</i>
									</span>
									<span className="flex justify-between">
										<span>BT (13-14): </span>
										<i className="text-terminal-400">+6</i>
									</span>
									<span className="flex justify-between">
										<span>BT (15): </span>
										<i className="text-terminal-400">+8</i>
									</span>
								</b>
							</p>
						</div>
					</div>
				)}
				<h2
					className="hover:bg-blood-800 px-4 py-2 font-major text-xl text-terminal-400 cursor-pointer"
					onClick={() => setOtherVisible(!otherVisible)}
				>
					Other
				</h2>
				{otherVisible && <div></div>}
			</div>
		</>
	);
}
