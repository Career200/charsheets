import { observer } from "mobx-react-lite";
import { colorSwitch } from "./utils";
import char from "../../store/cyberpunk/charsheet/baseChar";
import { StatString, role } from "../../store/cyberpunk/charsheet/types";
import { baseAllRoles } from "../../data/models/cp2020/base";
import { useState } from "react";
import Healthbar from "./components/Healthbox";
import Statbox from "./components/Statbox";
import Skillbox from "./components/Skillbox";

export const TestCharSheet = observer(() => {
	const {
		handle,
		setHandle,
		role,
		details,
		health,
		stats,
		bodyType,
		move,
		humanityTotal,
	} = char;
	const [listVisible, setListVisible] = useState(false);
	const [selectedStat, setSelectedStat] = useState<StatString>("INT");

	return (
		<>
			<form
				className={`p-2 h-full text-white ${colorSwitch(role.name)} font-space`}
				onSubmit={(e) => {
					e.preventDefault();
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
								value={handle}
								onChange={(e) => setHandle(e.currentTarget.value)}
							/>
						</div>
						<div className="flex items-center">
							<span className="font-bold">is a </span>
							<select
								className="ml-2 bg-black text-white text-lg"
								value={role.name}
								onChange={(e) => role.setRole(e.target.value as role)}
							>
								{baseAllRoles.map((role) => (
									<option key={role} value={role}>
										{role}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="relative w-full pt-2 flex flex-wrap justify-between gap-4">
						<div className="flex gap-2">
							<button
								type="submit"
								className="hover:outline hover:outline-slate-400 block p-2 border-2 border-blue-400 bg-blue-950"
							>
								Save
							</button>

							<button
								type="button"
								className="hover:outline hover:outline-slate-200 block p-2 border-2 border-yellow-600 bg-violet-950"
								onClick={() => setListVisible(!listVisible)}
							>
								Load character:
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
						value={details.description}
						onChange={(e) => {
							details.setDescription(e.target.value);
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
						value={details.notes}
						onChange={(e) => {
							details.setNotes(e.target.value);
						}}
					></textarea>
				</div>
				<hr />
				{/** HEALTHBAR */}
				<Healthbar currentDamage={health.damage} onChecked={health.setDamage} />
				<hr />
				{/** STATS */}
				<div className="stats p-4 flex justify-around items-center gap-2">
					<div className="flex flex-wrap gap-4">
						{stats.map((stat) => (
							<Statbox
								key={stat.short}
								stat={stat.short}
								value={stat.value}
								onMouseEnter={() =>
									stat.short !== "LUCK" && stat.short !== "MA"
										? setSelectedStat(stat.short as StatString)
										: null
								}
								onChange={(e) => stat.setValue(Number(e.currentTarget.value))}
								inputAttr={{ max: stat.short === "BT" ? 20 : 10, min: 1 }}
							/>
						))}
					</div>
					<div className="flex flex-wrap gap-4">
						<div className="p-1 w-[120px] border-2 border-orange-900">
							<h4 className="font-bold">BTM</h4>
							<p>{bodyType.type}</p>
							<p className="text-xl text-cyan-200">{bodyType.btm}</p>
						</div>
						<div className="flex flex-col flex-nowrap px-1 w-[120px] border-2 border-orange-900">
							<div className="flex justify-between">
								<p className="font-bold">RUN</p>
								<p>{move.run}</p>
							</div>
							<div className="flex justify-between">
								<p className="font-bold">LEAP</p>
								<p>{move.leap}</p>
							</div>
							<div className="flex justify-between">
								<p className="font-bold">Carry</p>
								<p>{move.carry}</p>
							</div>
							<div className="flex justify-between">
								<p className="font-bold">Deadlift</p>
								<p>{move.deadlift}</p>
							</div>
						</div>
					</div>
				</div>
				<hr />
				{/** SKILLS */}
				<div className="p-2">
					<div className="flex items-center gap-4">
						<Skillbox
							name={role.special.name}
							value={role.special.value}
							onChange={(e) =>
								role.special.setValue(Number(e.currentTarget.value))
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
						{selectedStat !== "LUCK" &&
							selectedStat !== "MA" &&
							stats
								.find((stat) => stat.short === selectedStat)
								?.skills?.map(({ name, value, setValue }, index) => (
									<Skillbox
										name={name}
										value={value}
										onChange={(e) => setValue(Number(e.currentTarget.value))}
										inputClass="hover:animate-pulse"
										key={name + index}
										inputAttr={{ max: 10, min: 0 }}
									/>
								))}
					</div>
				</div>
				<hr />
			</form>
		</>
	);
});
