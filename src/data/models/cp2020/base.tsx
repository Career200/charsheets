import { AllStatsType, Char, Role, statMap } from './types';

export const baseSkills = {
	INT: {
		Accounting: { name: 'Accounting', value: 0 },
		Anthropology: { name: 'Anthropology', value: 0 },
		AwarenessNotice: { name: 'Awareness/Notice', value: 0 },
		Biology: { name: 'Biology', value: 0 },
		Botany: { name: 'Botany', value: 0 },
		Chemistry: { name: 'Chemistry', value: 0 },
		Composition: { name: 'Composition', value: 0 },
		DiagnoseIllness: { name: 'Diagnose illness', value: 0 },
		EducationGeneralKnowledge: {
			name: 'Education & General knowledge',
			value: 0
		},
		Expert: { name: 'Expert', value: 0, array: [] },
		Gamble: { name: 'Gamble', value: 0 },
		Geology: { name: 'Geology', value: 0 },
		HideEvade: { name: 'Hide/Evade', value: 0 },
		History: { name: 'History', value: 0 },
		Languages: { name: 'Languages', value: 0, array: [] },
		LibrarySearch: { name: 'Library search', value: 0 },
		Mathematics: { name: 'Mathematics', value: 0 },
		Physics: { name: 'Physics', value: 0 },
		Programming: { name: 'Programming', value: 0 },
		ShadowTrack: { name: 'Shadow/Track', value: 0 },
		StockMarket: { name: 'Stock market', value: 0 },
		SystemKnowledge: { name: 'System knowledge', value: 0 },
		Teaching: { name: 'Teaching', value: 0 },
		WildernessSurvival: { name: 'Wilderness Survival', value: 0 },
		Zoology: { name: 'Zoology', value: 0 }
	},
	REF: {
		Archery: { name: 'Archery', value: 0 },
		Athletics: { name: 'Athletics', value: 0 },
		Brawling: { name: 'Brawling', value: 0 },
		Dance: { name: 'Dance', value: 0 },
		DodgeEscape: { name: 'Dodge/Escape', value: 0 },
		Driving: { name: 'Driving', value: 0 },
		Fencing: { name: 'Fencing', value: 0 },
		Handgun: { name: 'Handgun', value: 0 },
		HeavyWeapons: { name: 'Heavy Weapons', value: 0 },
		MartialArts: { name: 'MartialArts', value: 0, array: [] },
		Melee: { name: 'Melee', value: 0 },
		Motorcycle: { name: 'Motorcycle', value: 0 },
		OperateHeavyMachinery: { name: 'Operate Heavy Machinery', value: 0 },
		PilotGyro: { name: 'Pilot Gyro', value: 0 },
		PilotFixedWing: { name: 'Pilot Fixed Wing', value: 0 },
		PilotDirigible: { name: 'Pilot Dirigible', value: 0 },
		PilotVectorThrustVehicle: { name: 'Pilot Vector Thrust Vehicle', value: 0 },
		Rifle: { name: 'Rifle', value: 0 },
		Stealth: { name: 'Stealth', value: 0 },
		Submachinegun: { name: 'Submachinegun', value: 0 }
	},
	TECH: {
		AeroTech: { name: 'Aero Tech', value: 0 },
		AVTech: { name: 'AV Tech', value: 0 },
		BasicTech: { name: 'Basic Tech', value: 0 },
		CryotankOperation: { name: 'Cryotank Operation', value: 0 },
		CyberdeckDesign: { name: 'Cyberdeck Design', value: 0 },
		CyberTech: { name: 'Cyber Tech', value: 0 },
		Demolitions: { name: 'Demolitions', value: 0 },
		Disguise: { name: 'Disguise', value: 0 },
		Electronics: { name: 'Electronics', value: 0 },
		ElectricalSecurity: { name: 'Electrical Security', value: 0 },
		FirstAid: { name: 'First Aid', value: 0 },
		Forgery: { name: 'Forgery', value: 0 },
		GyroTech: { name: 'Gyro Tech', value: 0 },
		PaintDraw: { name: 'Paint or Draw', value: 0 },
		PhotoFilm: { name: 'Photo & Film', value: 0 },
		Pharmaceuticals: { name: 'Pharmaceuticals', value: 0 },
		PickLock: { name: 'Pick Lock', value: 0 },
		PickPocket: { name: 'Pick Pocket', value: 0 },
		PlayInstrument: { name: 'PlayInstrument', value: 0 },
		Weaponsmith: { name: 'Weaponsmith', value: 0 }
	},
	COOL: {
		Interrogation: { name: 'Interrogation', value: 0 },
		Intimidate: { name: 'Intimidate', value: 0 },
		Oratory: { name: 'Oratory', value: 0 },
		ResistTortureDrugs: { name: 'Resist Torture/Drugs', value: 0 },
		Streetwise: { name: 'Streetwise', value: 0 }
	},
	ATTR: {
		PersonalGrooming: { name: 'Personal Grooming', value: 0 },
		WardrobeStyle: { name: 'Wardrobe & Style', value: 0 }
	},
	BT: {
		Endurance: { name: 'Endurance', value: 0 },
		StrengthFeat: { name: 'Strength Feat', value: 0 },
		Swimming: { name: 'Swimming', value: 0 }
	},
	EMP: {
		HumanPerception: { name: 'Human Perception', value: 0 },
		Interview: { name: 'Interview', value: 0 },
		Leadership: { name: 'Leadership', value: 0 },
		Seduction: { name: 'Seduction', value: 0 },
		Social: { name: 'Social', value: 0 },
		PersuasionFastTalk: { name: 'Persuasion & Fast Talk', value: 0 },
		Perform: { name: 'Perform', value: 0 }
	},
	LUCK: undefined,
	MA: undefined
};

export const baseAllStats: AllStatsType = {
	INT: {
		short: 'INT',
		full: statMap.INT,
		value: 4,
		skills: baseSkills.INT
	},
	REF: {
		short: 'REF',
		full: statMap.REF,
		value: 6,
		skills: baseSkills.REF
	},
	TECH: {
		short: 'TECH',
		full: statMap.TECH,
		value: 3,
		skills: baseSkills.TECH
	},
	COOL: {
		short: 'COOL',
		full: statMap.COOL,
		value: 4,
		skills: baseSkills.COOL
	},
	ATTR: {
		short: 'ATTR',
		full: statMap.ATTR,
		value: 4,
		skills: baseSkills.ATTR
	},
	LUCK: {
		short: 'LUCK',
		full: statMap.LUCK,
		value: 5,
		skills: baseSkills.LUCK
	},
	MA: {
		short: 'MA',
		full: statMap.MA,
		value: 6,
		skills: baseSkills.MA
	},
	BT: {
		short: 'BT',
		full: statMap.BT,
		value: 5,
		skills: baseSkills.BT
	},
	EMP: {
		short: 'EMP',
		full: statMap.EMP,
		value: 4,
		skills: baseSkills.EMP
	}
};

export const defaultRole: Role = {
	name: 'SOLO',
	special: {
		name: 'Combat Sense',
		value: 1
	}
};

export const baseChar: Char = {
	name: 'Default',
	role: defaultRole,
	stats: baseAllStats,
	computed: {
		Body: {
			type: 'Average',
			btm: -2
		},
		move: {
			carry: 50,
			deadlift: 200,
			run: 18,
			leap: 4.5
		},

		humanityTotal: 40
	},
	notes: ['Type something...'],
	desc: 'Smallest goon on the block'
};

export const baseAllRoles = [
	'SOLO',
	'NOMAD',
	'ROCKERBOY',
	'NETRUNNER',
	'CORPORATE',
	'TECHIE',
	'MEDTECH',
	'MEDIA',
	'COP',
	'FIXER',
	'CUSTOM'
];
