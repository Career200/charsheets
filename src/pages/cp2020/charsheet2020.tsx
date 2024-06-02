import { useEffect, useRef, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

import { baseAllRoles, baseChar } from "../../data/models/cp2020/base";
import {
	AllSkillsStrings,
	AllStatsType,
	Char,
	Role,
	StatString,
	statMap,
} from "../../store/cyberpunk/charsheet/types";

import Skillbox from "./components/Skillbox";
import Statbox from "./components/Statbox";
import {
	SpaceMap,
	exportData,
	generateId,
	getData,
	getMap,
	importData,
	removeData,
	saveData,
} from "../../data/saveLocal/dataManager";
import useToast from "../../utils/hooks/useToast";
import Healthbar from "./components/Healthbox";
import { colorSwitch, computeSpecialAbility, computeStats } from "./utils";

export default function Charsheet2020() {
	const [listVisible, setListVisible] = useState(false);
	const [charMap, setCharMap] = useState<SpaceMap>();
	const [selectedStat, setSelectedStat] = useState<StatString>("INT");
	const [char, setChar] = useState<Char>(baseChar);
	const [notesProxy, setNotesProxy] = useState(char.notes);
	const [descProxy, setDescProxy] = useState(char.desc);
	const [healthProxy, setHealthProxy] = useState<number>(
		char.health?.damage || 0
	);

	// Load Character detect click outside
	const loadWindowRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				loadWindowRef.current &&
				!loadWindowRef.current.contains(e.target as Node)
			) {
				setListVisible(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [loadWindowRef]);

	// Trigger fileInput on button
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const handleImportButton = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	//sync id & char.id
	const id = useRef<string>(char.id || "");
	useEffect(() => {
		setChar((prev) => {
			return { ...prev, id: id.current };
		});
	}, [id]);

	//const totalStats = useRef([]);
	//const totalSkills = useRef(0);

	//
	useEffect(() => {
		getMap().then((map) => setCharMap(map));
		id.current = generateId();

		//
		char.health = char.health ?? { damage: 0 };
	}, []);

	//Compute Stats
	const RenderComputed = (char: Char) => {
		const computed = computeStats(
			char.stats.BT.value,
			char.stats.MA.value,
			char.stats.EMP.value
		);
		const name = computeSpecialAbility(char.role.name);
		setChar((prev) => {
			return {
				...prev,
				role: {
					...prev.role,
					special: { name, value: prev.role.special.value },
				},
				computed,
			};
		});
	};
	useEffect(() => {
		RenderComputed(char);
	}, [char.stats.BT, char.stats.MA, char.stats.EMP, char.role.name]);

	useEffect(() => {}, []);

	const handleStatChange = (key: StatString, newSkillValue: number) => {
		setChar((prevStats) => {
			const updatedStats: AllStatsType = {
				...prevStats.stats,
				[key]: {
					...prevStats.stats[key],
					value: newSkillValue,
				},
			};
			return {
				...prevStats,
				stats: updatedStats,
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
							value: newSkillValue,
						},
					},
				},
			};
			const x = {
				...prevStats,
				stats: updatedStats,
			};
			return x;
		});
	};

	const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setChar((prevStats) => {
			const role: Role = {
				...prevStats.role,
				name: e.target.value as Role["name"],
			};
			return {
				...prevStats,
				role,
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
						value: newSkillValue,
					},
				},
			};
		});
	};

	const handleHealthChange = (newDamage: number) => {
		setHealthProxy(newDamage);
		setChar((prev) => {
			return {
				...prev,
				health: {
					damage: newDamage,
				},
			};
		});
	};

	const saveCharacter = async () => {
		if (charMap !== undefined && id.current) {
			try {
				await saveData(char, id.current, char.name);
				const newCharMap = await getMap();
				setCharMap(newCharMap);
				useToast("Save successful");
			} catch (err) {
				useToast("error!");
				console.log(err);
			}
		}
	};

	const loadCharacter = async (key?: string) => {
		if (key === undefined) {
			setChar(baseChar);
			id.current = generateId();
		} else {
			const newChar = (await getData(key)) as Char;
			setChar(newChar);
			id.current = key;
		}
		RenderComputed(char);
		setNotesProxy(char.notes);
		setDescProxy(char.desc);
	};

	const deleteCharacter = async (key: string) => {
		loadCharacter();
		const newCharMap = await removeData(key);
		setCharMap(newCharMap);
	};

	return (
		<>
			<form
				className={`p-2 h-full text-white ${colorSwitch(
					char.role.name
				)} font-space`}
				onSubmit={(e) => {
					e.preventDefault();
					saveCharacter();
				}}
				onKeyDown={(e) => e.key !== "Enter" && e.key !== " "}
			>
				{/** HEADER */}
				<div className="flex flex-wrap items-center justify-between py-2 px-4 border-2 border-black">
					<div className="grow flex flex-wrap justify-between gap-2">
						<div className="grow flex items-center gap-2">
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
						{/* <div className="flex items-center flex-wrap gap-4">
						WiP
						<p>
							Total <span className="text-terminal-400">STATS:</span>{' '}
							{totalStats.current}
						</p>
						<p>
							Total <span className="text-terminal-400">SKILLS:</span>{' '}
							{totalSkills.current}
						</p>
					</div> */}
					</div>
					<div className="relative w-full pt-2 flex flex-wrap justify-between gap-4">
						<div className="flex gap-2">
							<button
								type="submit"
								className="hover:outline hover:outline-slate-400 block p-2 border-2 border-blue-400 bg-blue-950"
							>
								Save{" "}
								{id.current &&
								charMap &&
								Object.keys(charMap).includes(id.current)
									? "changes"
									: "character"}
							</button>

							<button
								type="button"
								className="hover:outline hover:outline-slate-200 block p-2 border-2 border-yellow-600 bg-violet-950"
								onClick={() => setListVisible(!listVisible)}
							>
								Load character:
							</button>
						</div>

						<input
							type="file"
							className="hidden"
							ref={fileInputRef}
							//! Add file validation!
							onChange={(e) => importData(e, setChar)}
						/>
						{listVisible && charMap !== undefined && (
							<div
								ref={loadWindowRef}
								className="absolute z-10 top-[105%] min-w-max max-w-[75vw] min-h-12 max-h-[75vh] overflow-auto  p-2 border-orange-800 bg-gray-800"
							>
								<p
									className="p-2 bg-gray-950 hover:bg-gray-700 cursor-pointer"
									onClick={() => {
										loadCharacter();
										setListVisible(false);
									}}
								>
									Create new character
								</p>
								<hr />
								{Object.entries(charMap).map(([key, value], i) => (
									<p
										className="flex justify-between items-center p-2 border-b-[1px] border-gray-500 hover:bg-gray-700 cursor-pointer"
										key={key}
										onClick={() => {
											loadCharacter(key);
											setListVisible(false);
										}}
									>
										<span>
											{" "}
											{i + 1}. {value}
										</span>
										<span
											className="inline-block py-[1px] rounded-lg bg-blood-600 hover:bg-blood-400 text-white text-3xl"
											onClick={(e) => {
												deleteCharacter(key);
												e.stopPropagation();
											}}
										>
											<MdDeleteForever />
										</span>
									</p>
								))}
							</div>
						)}
						<div className="flex ml-[8.5rem] gap-2">
							<button
								type="button"
								className="hover:outline hover:outline-red-200 block p-2 border-2 border-red-400 bg-red-950"
								onClick={handleImportButton}
							>
								Import
							</button>
							<button
								type="button"
								className="hover:outline hover:outline-green-100 block p-2 border-2 border-terminal-400 bg-green-950"
								onClick={() => exportData(char, char.name + "_" + id.current)}
							>
								Export
							</button>
						</div>
					</div>
				</div>
				{/** DESCRIPTION */}
				<div className="mt-2">
					<h4 className="bg-black text-terminal-400 px-4 text-lg">
						Description:
					</h4>
					<textarea
						autoComplete="off"
						className="w-full px-2 bg-black text-terminal-400"
						value={descProxy ?? ""}
						onChange={(e) => {
							setDescProxy(e.target.value);
						}}
						onBlur={(e) => {
							setChar((prev) => {
								return { ...prev, desc: e.target.value };
							});
						}}
					></textarea>
				</div>
				{/** NOTES */}
				<div>
					<h4 className="bg-black text-terminal-400 py-2 px-4 text-lg">
						Notes:
					</h4>
					<textarea
						autoComplete="off"
						className="w-full min-h-[4rem] px-2 bg-black text-terminal-400"
						value={notesProxy ?? ""}
						onChange={(e) => {
							setNotesProxy(e.target.value);
						}}
						onBlur={(e) => {
							setChar((prev) => {
								return { ...prev, notes: e.target.value };
							});
						}}
					></textarea>
				</div>
				<hr />
				{/** HEALTHBAR */}
				<Healthbar currentChecked={healthProxy} callback={handleHealthChange} />
				<hr />
				{/** STATS */}
				<div className="stats p-4 flex justify-around items-center gap-2">
					<div className="flex flex-wrap gap-4">
						{Object.keys(statMap).map((stat, index) => (
							<Statbox
								key={stat + index}
								stat={stat as StatString}
								value={char.stats[stat as StatString].value}
								onClick={() =>
									stat !== "LUCK" && stat !== "MA"
										? setSelectedStat(stat as StatString)
										: null
								}
								onChange={(e) =>
									handleStatChange(
										stat as StatString,
										Number(e.currentTarget.value)
									)
								}
								inputAttr={{ max: stat === "BT" ? 20 : 10, min: 1 }}
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
				{/** SKILLS */}
				<div className="p-2">
					<div className="flex items-center gap-4">
						<Skillbox
							name={char.role.special.name}
							value={char.role.special.value}
							onChange={(e) =>
								handleSpecialAbilityChange(Number(e.target.value))
							}
							inputClass="ml-2 outline-orange-400 outline"
							inputAttr={{ max: 10, min: 0 }}
						/>
						<p>
							<span className="text-terminal-400 text-2xl font-bold">
								{selectedStat}
							</span>{" "}
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
		</>
	);
}
