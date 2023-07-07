import { Form } from 'react-router-dom';
import { statMap, baseAllStats } from '../../data/models/cp2020';
import { useState } from 'react';
import Skillbox from './components/Skillbox';
import Statbox from './components/Statbox';

export default function Charsheet2020() {
	const [selectedStat, setSelectedStat] = useState<statString>('INT');
	const [charStats, setCharStats] = useState<allStatsType>(baseAllStats);
	//const [charName, setCharName] = useState<string>('');

	const handleStatChange = (key: statString, newSkillValue: number) => {
		setCharStats((prevStats) => {
			const updatedStats = {
				...prevStats,
				[selectedStat]: {
					...prevStats[key],
					value: newSkillValue
				}
			};
			return updatedStats;
		});
	};

	const handleSkillChange = (key: string, newSkillValue: number) => {
		setCharStats((prevStats) => {
			const updatedStats = {
				...prevStats,
				[selectedStat]: {
					...prevStats[selectedStat],
					skill: {
						[key]: {
							...prevStats[selectedStat][key],
							value: newSkillValue
						}
					}
				}
			};
			return updatedStats;
		});
	};
	return (
		<Form className="min-h-full bg-cyan-950 text-white" action="">
			<div className="p-4 flex gap-4">
				{Object.keys(statMap).map((stat, index) => (
					<Statbox
						key={stat + index}
						stat={stat}
						value={charStats[stat as statString].value}
						onClick={() => setSelectedStat(stat as statString)}
						onChange={(e) =>
							handleStatChange(
								stat as statString,
								Number(e.currentTarget.value)
							)
						}
						inputAttr={{ max: stat === 'BT' ? 20 : 10, min: 1 }}
					/>
				))}
			</div>
			<div className="m-2 p-2 border-2 border-black">Name:</div>
			<div className="p-2 flex flex-wrap gap-2">
				{/* {Object.entries(charStats[selectedStat].skills).map(
					([key, value], index) => (
						<Skillbox
							name={value.name}
							value={value.value}
							onChange={(e) => handleSkill(key, Number(e.currentTarget.value))}
							inputClass="hover:animate-pulse"
							key={key + index}
							inputAttr={{ max: 10, min: 0 }}
						/>
					)
				)} */}
			</div>
			<button
				type="submit"
				className="block fixed p-2 bottom-4 right-4 border-2 border-blue-400 bg-blue-950"
			>
				Save changes
			</button>
		</Form>
	);
}
