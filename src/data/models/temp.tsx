const baseSkills = {
	int: {
		short: 'INT',
		full: 'Intellect',
		skills: {
			Accounting: { name: 'Accounting', is: 0 },
			Anthropology: { name: 'Anthropology', is: 0 },
			AwarenessNotice: { name: 'Awareness/Notice', is: 0 },
			Biology: { name: 'Biology', is: 0 },
			Botany: { name: 'Botany', is: 0 },
			Chemistry: { name: 'Chemistry', is: 0 },
			Composition: { name: 'Composition', is: 0 },
			DiagnoseIllness: { name: 'Diagnose illness', is: 0 },
			EducationGeneralKnowledge: {
				name: 'Education & General knowledge',
				is: 0
			},
			Expert: { name: 'Expert', is: 0, array: [] },
			Gamble: { name: 'Gamble', is: 0 },
			Geology: { name: 'Geology', is: 0 },
			HideEvade: { name: 'Hide/Evade', is: 0 },
			History: { name: 'History', is: 0 },
			Languages: { name: 'Languages', is: 0, array: [] },
			LibrarySearch: { name: 'Library search', is: 0 },
			Mathematics: { name: 'Mathematics', is: 0 },
			Physics: { name: 'Physics', is: 0 },
			Programming: { name: 'Programming', is: 0 },
			ShadowTrack: { name: 'Shadow/Track', is: 0 },
			StockMarket: { name: 'Stock market', is: 0 },
			SystemKnowledge: { name: 'System knowledge', is: 0 },
			Teaching: { name: 'Teaching', is: 0 },
			WildernessSurvival: { name: 'Wilderness Survival', is: 0 },
			Zoology: { name: 'Zoology', is: 0 }
		}
	},
	ref: {
		short: 'REF',
		full: 'Reflexes',
		skills: {
			Archery: { name: 'Archery', is: 0 },
			Athletics: { name: 'Athletics', is: 0 },
			Brawling: { name: 'Brawling', is: 0 },
			Dance: { name: 'Dance', is: 0 },
			DodgeEscape: { name: 'Dodge/Escape', is: 0 },
			Driving: { name: 'Driving', is: 0 },
			Fencing: { name: 'Fencing', is: 0 },
			Handgun: { name: 'Handgun', is: 0 },
			HeavyWeapons: { name: 'Heavy Weapons', is: 0 },
			MartialArts: { name: 'MartialArts', is: 0, array: [] },
			Melee: { name: 'Melee', is: 0 },
			Motorcycle: { name: 'Motorcycle', is: 0 },
			OperateHeavyMachinery: { name: 'Operate Heavy Machinery', is: 0 },
			PilotGyro: { name: 'Pilot Gyro', is: 0 },
			PilotFixedWing: { name: 'Pilot Fixed Wing', is: 0 },
			PilotDirigible: { name: 'Pilot Dirigible', is: 0 },
			PilotVectorThrustVehicle: { name: 'Pilot Vector Thrust Vehicle', is: 0 },
			Rifle: { name: 'Rifle', is: 0 },
			Stealth: { name: 'Stealth', is: 0 }
		},
		Submachinegun: { name: 'Submachinegun', is: 0 }
	},
	tech: {
		short: 'TECH',
		full: 'Tech',
		skils: {
			AeroTech: { name: 'Aero Tech', is: 0 },
			AVTech: { name: 'AV Tech', is: 0 },
			BasicTech: { name: 'Basic Tech', is: 0 },
			CryotankOperation: { name: 'Cryotank Operation', is: 0 },
			CyberdeckDesign: { name: 'Cyberdeck Design', is: 0 },
			CyberTech: { name: 'Cyber Tech', is: 0 },
			Demolitions: { name: 'Demolitions', is: 0 },
			Disguise: { name: 'Disguise', is: 0 },
			Electronics: { name: 'Electronics', is: 0 },
			ElectricalSecurity: { name: 'Electrical Security', is: 0 },
			FirstAid: { name: 'First Aid', is: 0 },
			Forgery: { name: 'Forgery', is: 0 },
			GyroTech: { name: 'Gyro Tech', is: 0 },
			PaintDraw: { name: 'Paint or Draw', is: 0 },
			PhotoFilm: { name: 'Photo & Film', is: 0 },
			Pharmaceuticals: { name: 'Pharmaceuticals', is: 0 },
			PickLock: { name: 'Pick Lock', is: 0 },
			PickPocket: { name: 'Pick Pocket', is: 0 },
			PlayInstrument: { name: 'PlayInstrument', is: 0 },
			Weaponsmith: { name: 'Weaponsmith', is: 0 }
		}
	},
	cool: {
		short: 'COOL',
		full: 'Cool',
		skills: {
			Interrogation: { name: 'Interrogation', is: 0 },
			Intimidate: { name: 'Intimidate', is: 0 },
			Oratory: { name: 'Oratory', is: 0 },
			ResistTortureDrugs: { name: 'Resist Torture/Drugs', is: 0 },
			Streetwise: { name: 'Streetwise', is: 0 }
		}
	},
	attr: {
		short: 'ATTR',
		full: 'Attractiveness',
		skills: {
			PersonalGrooming: { name: 'Personal Grooming', is: 0 },
			WardrobeStyle: { name: 'Wardrobe & Style', is: 0 }
		}
	},
	luck: { short: 'LUCK', full: 'Luck' },
	ma: { short: 'MA', full: 'Movement Allowance' },
	bt: {
		short: 'BT',
		full: 'Body Type',
		skills: {
			Endurance: { name: 'Endurance', is: 0 },
			StrengthFeat: { name: 'Strength Feat', is: 0 },
			Swimming: { name: 'Swimming', is: 0 }
		}
	},
	emp: {
		short: 'EMP',
		full: 'Empathy',
		skills: {
			HumanPerception: { name: 'Human Perception', is: 0 },
			Interview: { name: 'Interview', is: 0 },
			Leadership: { name: 'Leadership', is: 0 },
			Seduction: { name: 'Seduction', is: 0 },
			Social: { name: 'Social', is: 0 },
			PersuasionFastTalk: { name: 'Persuasion & Fast Talk', is: 0 },
			Perform: { name: 'Perform', is: 0 }
		}
	}
};
