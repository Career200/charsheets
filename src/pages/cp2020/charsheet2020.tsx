import { useEffect, useRef, useState } from 'react';

import { baseAllRoles, baseChar } from '../../data/models/cp2020/base';
import {
	AllSkillsStrings,
	AllStatsType,
	Char,
	ComputedType,
	Role,
	StatString,
	statMap
} from '../../data/models/cp2020/types';

import Skillbox from './components/Skillbox';
import Statbox from './components/Statbox';
import {
	SpaceMap,
	generateId,
	getData,
	getMap,
	saveData
} from '../../data/saveLocal/dataManager';

const colorSwitch = (role: Role['name']) => {
	switch (role) {
		case 'SOLO': {
			return 'bg-terminal-800';
		}
		case 'NOMAD': {
			return 'bg-blood-800';
		}
		case 'ROCKERBOY': {
			return 'bg-stone-900';
		}
		case 'NETRUNNER': {
			return 'bg-slate-950';
		}
		default: {
			return 'bg-cyan-950';
		}
	}
};

export default function Charsheet2020() {
	const [listVisible, setListVisible] = useState(false);
	const [selectedStat, setSelectedStat] = useState<StatString>('INT');
	const [char, setChar] = useState<Char>(baseChar);
	const [notesProxy, setNotesProxy] = useState(char.notes);

	const loadWindowRef = useRef<any>();
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (loadWindowRef.current && !loadWindowRef.current.contains(e.target)) {
				setListVisible(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [loadWindowRef]);

	const charMap = useRef<SpaceMap>();
	const totalStats = useRef([]);
	const totalSkills = useRef(0);

	useEffect(() => {
		getMap().then((map) => (charMap.current = map));
		char.id = generateId();
	}, []);

	useEffect(() => {
		let Body: ComputedType['Body'];
		switch (char.stats.BT.value) {
			case 0:
			case 1:
			case 2: {
				Body = { type: 'Very Weak', btm: 0 };
				break;
			}
			case 3:
			case 4: {
				Body = { type: 'Weak', btm: -1 };
				break;
			}
			case 5:
			case 6: {
				Body = { type: 'Average', btm: -2 };
				break;
			}
			case 7:
			case 8: {
				Body = { type: 'Strong', btm: -3 };
				break;
			}
			case 9:
			case 10: {
				Body = { type: 'Very Strong', btm: -4 };
				break;
			}
			default: {
				Body = { type: 'Superhuman', btm: -5 };
			}
		}
		const move = {
			carry: char.stats.BT.value * 10,
			deadlift: char.stats.BT.value * 40,
			run: char.stats.MA.value * 3,
			leap: (char.stats.MA.value * 3) / 4
		};
		const humanityTotal = char.stats.EMP.value * 10;
		const computed: ComputedType = { Body, move, humanityTotal };
		setChar((prev) => {
			return { ...prev, computed };
		});
	}, [char.stats.BT, char.stats.MA, char.stats.EMP]);

	useEffect(() => {
		let name: Role['special']['name'];
		switch (char.role.name) {
			case 'SOLO':
				name = 'Combat Sense';
				break;
			case 'NOMAD':
				name = 'Family';
				break;
			case 'ROCKERBOY':
				name = 'Charismatic Leadership';
				break;
			case 'NETRUNNER':
				name = 'Interface';
				break;
			case 'CORPORATE':
				name = 'Resources';
				break;
			case 'TECHIE':
				name = 'Jury Rig';
				break;
			case 'MEDTECH':
				name = 'Medical Tech';
				break;
			case 'MEDIA':
				name = 'Credibility';
				break;
			case 'COP':
				name = 'Authority';
				break;
			case 'FIXER':
				name = 'Streetdeal';
				break;
			case 'CUSTOM':
				name = 'Custom Special Ability';
				break;
		}
		setChar((prev) => {
			return { ...prev, role: { ...prev.role, special: { name } } };
		});
	}, [char.role.name]);

	const handleStatChange = (key: StatString, newSkillValue: number) => {
		setChar((prevStats) => {
			const updatedStats: AllStatsType = {
				...prevStats.stats,
				[key]: {
					...prevStats.stats[key],
					value: newSkillValue
				}
			};
			return {
				...prevStats,
				stats: updatedStats
			};
		});
	};

	const handleSkillChange = (key: AllSkillsStrings, newSkillValue: number) => {
		setChar((prevStats) => {
			const updatedStats: AllStatsType = {
				...prevStats.stats,
				[selectedStat]: {
					...prevStats.stats[selectedStat],
					skills: {
						...prevStats.stats[selectedStat].skills,
						[key]: {
							//@ts-expect-error
							...prevStats.stats![selectedStat].skills![key],
							value: newSkillValue
						}
					}
				}
			};
			const x = {
				...prevStats,
				stats: updatedStats
			};
			return x;
		});
	};

	const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setChar((prevStats) => {
			const role: Role = {
				...prevStats.role,
				name: e.target.value as Role['name']
			};
			return {
				...prevStats,
				role
			};
		});
	};

	const handleSpecialAbilityChange = (newSkillValue: number) => {
		setChar((prev) => {
			return {
				...prev,
				role: {
					...prev.role,
					special: {
						name: prev.role.special.name,
						value: newSkillValue
					}
				}
			};
		});
	};

	const handleNewCharacter = () => (char.id = generateId());

	const saveCharacter = async () => {
		if (charMap.current !== undefined && char.id) {
			await saveData(char, char.id, char.name);
			charMap.current = await getMap();
			console.log(charMap.current);
		}
	};

	const loadCharacter = async (id: string) => {
		const char = await getData(id);
		setChar(char);
		setNotesProxy(char.notes);
	};

	return (
		<form
			className={`p-2 h-full text-white ${colorSwitch(
				char.role.name
			)} font-space`}
			onSubmit={(e) => {
				e.preventDefault();
				saveCharacter();
			}}
			onKeyDown={(e) => e.key !== 'Enter' && e.key !== ' '}
		>
			<div className="flex items-center justify-between p-2 border-2 border-black">
				<div className="px-4 grow flex justify-between flex-wrap gap-2">
					<div className="flex items-center gap-2">
						<span>Name: </span>
						<input
							type="text"
							className="w-[50vw] p-1 bg-transparent text-2xl text-cyan-200"
							value={char.name}
							onChange={(e) =>
								setChar((prev) => {
									return { ...prev, name: e.target.value };
								})
							}
						/>
					</div>
					<div className="flex items-center">
						<span className="font-bold">is a </span>
						<select
							className="ml-2 bg-black text-white text-lg"
							value={char.role.name}
							onChange={handleRoleChange}
						>
							{baseAllRoles.map((role) => (
								<option key={role} value={role}>
									{role}
								</option>
							))}
						</select>
					</div>
					<div className="flex items-center flex-wrap gap-4">
						WiP
						<p>
							Total <span className="text-terminal-400">STATS:</span>{' '}
							{totalStats.current}
						</p>
						<p>
							Total <span className="text-terminal-400">SKILLS:</span>{' '}
							{totalSkills.current}
						</p>
					</div>
				</div>
				<div className="relative flex flex-wrap justify-end gap-2">
					<button
						type="submit"
						className="hover:outline hover:outline-slate-400 block p-2 border-2 border-blue-400 bg-blue-950"
					>
						Save changes
					</button>
					<button
						type="button"
						className="hover:outline hover:outline-slate-200 block p-2 border-2 border-yellow-600 bg-violet-950"
						onClick={() => setListVisible(!listVisible)}
					>
						Load character:
					</button>
					{listVisible && charMap.current !== undefined && (
						<div
							ref={loadWindowRef}
							className="absolute top-[105%] left-4 min-h-12 max-h-[75vh] overflow-auto w-full p-2 border-orange-800 bg-gray-800"
						>
							<p
								className="p-2 bg-gray-950 hover:bg-gray-700 cursor-pointer"
								onClick={() => {
									handleNewCharacter();
									setListVisible(false);
								}}
							>
								Create new character
							</p>
							<hr />
							{Object.entries(charMap.current!).map(([key, value], i) => (
								<p
									className="p-2 border-b-[1px] border-gray-500 hover:bg-gray-700 cursor-pointer"
									key={key}
									onClick={() => {
										loadCharacter(key);
										setListVisible(false);
									}}
								>
									{i + 1}. {value}
								</p>
							))}
						</div>
					)}
				</div>
			</div>
			<h4 className="bg-black text-terminal-400 mt-4 py-2 px-4 text-lg">
				Notes:
			</h4>
			<textarea
				autoComplete="off"
				className="w-full min-h-[4rem] px-2 bg-black text-terminal-400"
				value={notesProxy ?? ''}
				onChange={(e) => {
					setNotesProxy(e.target.value);
				}}
				onBlur={(e) => {
					setChar((prev) => {
						return { ...prev, notes: e.target.value };
					});
				}}
			></textarea>
			<hr />
			<div className="stats p-4 flex justify-around items-center gap-2">
				<div className="flex flex-wrap gap-4">
					{Object.keys(statMap).map((stat, index) => (
						<Statbox
							key={stat + index}
							stat={stat as StatString}
							value={char.stats[stat as StatString].value}
							onClick={() =>
								stat !== 'LUCK' && stat !== 'MA'
									? setSelectedStat(stat as StatString)
									: null
							}
							onChange={(e) =>
								handleStatChange(
									stat as StatString,
									Number(e.currentTarget.value)
								)
							}
							inputAttr={{ max: stat === 'BT' ? 20 : 10, min: 1 }}
						/>
					))}
				</div>
				<div className="flex flex-wrap gap-4">
					<div className="p-1 w-[120px] border-2 border-orange-900">
						<h4 className="font-bold">BTM</h4>
						<p>{char.computed?.Body.type}</p>
						<p className="text-xl text-cyan-200">{char.computed?.Body.btm}</p>
					</div>
					<div className="flex flex-col flex-nowrap px-1 w-[120px] border-2 border-orange-900">
						<div className="flex justify-between">
							<p className="font-bold">RUN</p>
							<p>{char.computed?.move.run}</p>
						</div>
						<div className="flex justify-between">
							<p className="font-bold">LEAP</p>
							<p>{char.computed?.move.leap}</p>
						</div>
						<div className="flex justify-between">
							<p className="font-bold">Carry</p>
							<p>{char.computed?.move.carry}</p>
						</div>
						<div className="flex justify-between">
							<p className="font-bold">Deadlift</p>
							<p>{char.computed?.move.deadlift}</p>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className="p-2">
				<div className="flex items-center gap-4">
					<Skillbox
						name={char.role.special.name}
						value={char.role.special.value || 0}
						onChange={(e) => handleSpecialAbilityChange(Number(e.target.value))}
						inputClass="ml-2 outline-orange-400 outline"
						inputAttr={{ max: 10, min: 0 }}
					/>
					<p>
						<span className="text-terminal-400 text-2xl font-bold">
							{selectedStat}
						</span>{' '}
						skills:
					</p>
				</div>
				<div className="p-2 flex flex-wrap gap-2">
					{Object.entries(char.stats[selectedStat].skills ?? {}).map(
						([key, value], index) => (
							<Skillbox
								name={value.name}
								value={value.value}
								onChange={(e) =>
									handleSkillChange(
										key as AllSkillsStrings,
										Number(e.currentTarget.value)
									)
								}
								inputClass="hover:animate-pulse"
								key={key + index}
								inputAttr={{ max: 10, min: 0 }}
							/>
						)
					)}
				</div>
			</div>
			<hr />
		</form>
	);
}
