enum statMap {
	INT = 'Intellect',
	REF = 'Reflexes',
	TECH = 'Tech',
	COOL = 'Cool',
	ATTR = 'Attractiveness',
	LUCK = 'Luck',
	MA = 'Movement Allowance',
	BT = 'Body Type',
	EMP = 'Empathy'
}

const baseSkills = {
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
	LUCK: {},
	MA: {}
};

export class stat<T extends keyof typeof statMap> {
	value: number;
	short: T;
	full: statMap;
	skills?: (typeof baseSkills)[keyof typeof baseSkills];
	computed?: Record<string, any>;

	constructor(stat: T, value: number) {
		this.value = value;
		this.short = stat;
		this.full = statMap[this.short];
		this.skills = { ...baseSkills[stat] };
		/* switch (stat) {
			case 'EMP': {
				this.computed = {
					humanity: {
						name: 'Humanity',
						value: this.value * 10
					}
				};
				break;
			}
			case 'MA': {
				this.computed = {
					run: {
						name: 'RUN',
						value: this.value * 3
					},
					leap: {
						name: 'LEAP',
						value: (this.value * 3) / 4
					}
				};
				break;
			}
			case 'BT': {
				switch (value) {
					case 0:
					case 1:
					case 2: {
						this.computed = { bt: 'Very Weak', btm: 0 };
						break;
					}
					case 3:
					case 4: {
						this.computed = { bt: 'Weak', btm: -1 };
						break;
					}
					case 5:
					case 6: {
						this.computed = { bt: 'Average', btm: -2 };
						break;
					}
					case 7:
					case 8: {
						this.computed = { bt: 'Strong', btm: -3 };
						break;
					}
					case 9:
					case 10: {
						this.computed = { bt: 'Very Strong', btm: -4 };
						break;
					}
					default: {
						this.computed = { bt: 'Superhuman', btm: -5 };
					}
				}
				this.computed = {
					...this.computed,
					carry: value * 10,
					deadlift: value * 40
				};
				break;
			}
		} */
	}
	addSkill(skill: Partial<(typeof baseSkills)[typeof this.short]>) {
		const updatedSkills: Partial<(typeof baseSkills)[typeof this.short]> = {};
		for (const key in skill) {
			if (typeof skill[key] === 'number') {
				updatedSkills[key] = { name: key, value: skill[key] };
			}
		}
		this.skills = { ...this.skills, ...updatedSkills };
	}
}

export class intStat extends stat<'INT'> {
	constructor(val: number) {
		super('INT', val);
	}
}
export class refStat extends stat<'REF'> {
	constructor(val: number) {
		super('REF', val);
	}
}
export class techStat extends stat {}
export class coolStat extends stat {}
export class attrStat extends stat {}
export class luckStat extends stat {}
export class maStat extends stat {}
export class btStat extends stat {}
export class empStat extends stat {}

interface role {
	name:
		| 'SOLO'
		| 'NOMAD'
		| 'ROCKERBOY'
		| 'NETRUNNER'
		| 'CORPORATE'
		| 'TECHIE'
		| 'MEDTECH'
		| 'MEDIA'
		| 'COP'
		| 'FIXER'
		| 'CUSTOM';
	special?:
		| { name: 'Authority'; value?: number }
		| { name: 'Charismatic Leadership'; value?: number }
		| { name: 'Combat Sense'; value?: number }
		| { name: 'Credibility'; value?: number }
		| { name: 'Family'; value?: number }
		| { name: 'Interface'; value?: number }
		| { name: 'Jury Rig'; value?: number }
		| { name: 'Medical Tech'; value?: number }
		| { name: 'Resources'; value?: number }
		| { name: 'Streetdeal'; value?: number }
		| {
				name: 'Custom Special Ability';
				value?: number;
		  };
}
interface skill {
	name: string;
	value?: number;
}
interface skillArray extends skill {
	array: skill[];
}

const CONST = {
	role: {
		special: {
			authority: 'Authority',
			charismaticLeadership: 'Charismatic Leadership',
			combatSense: 'Combat Sense',
			credibility: 'Credibility',
			family: 'Family',
			interface: 'Interface',
			juryRig: 'Jury Rig',
			medicalTech: 'Medical Tech',
			resources: 'Resources',
			streetdeal: 'Streetdeal',
			customSpecialAbility: 'Custom Special Ability'
		}
	},
	stats: {
		int: {
			short: 'INT',
			full: 'Intellect',
			skills: {
				accounting: 'Accounting',
				anthropology: 'Anthropology',
				awarenessNotice: 'Awareness/Notice',
				biology: 'Biology',
				botany: 'Botany',
				chemistry: 'Chemistry',
				composition: 'Composition',
				diagnoseIllness: 'Diagnose illness',
				educationGeneralKnowledge: 'Education & General knowledge',
				expert: 'Expert',
				gamble: 'Gamble',
				geology: 'Geology',
				hideEvade: 'Hide/Evade',
				history: 'History',
				languages: 'Languages',
				librarySearch: 'Library search',
				mathematics: 'Mathematics',
				physics: 'Physics',
				programming: 'Programming',
				shadowTrack: 'Shadow/Track',
				stockMarket: 'Stock market',
				systemKnowledge: 'System knowledge',
				teaching: 'Teaching',
				wildernessSurvival: 'Wilderness Survival',
				zoology: 'Zoology'
			}
		},
		ref: {
			short: 'REF',
			full: 'Reflexes',
			skills: {
				archery: 'Archery',
				athletics: 'Athletics',
				brawling: 'Brawling',
				dance: 'Dance',
				dodgeEscape: 'Dodge/Escape',
				driving: 'Driving',
				fencing: 'Fencing',
				handgun: 'Handgun',
				heavyWeapons: 'Heavy Weapons',
				martialArts: 'MartialArts',
				melee: 'Melee',
				motorcycle: 'Motorcycle',
				operateHeavyMachinery: 'Operate Heavy Machinery',
				pilotGyro: 'Pilot Gyro',
				pilotFixedWing: 'Pilot Fixed Wing',
				pilotDirigible: 'Pilot Dirigible',
				pilotVectorThrustVehicle: 'Pilot Vector Thrust Vehicle',
				rifle: 'Rifle',
				stealth: 'Stealth',
				submachinegun: 'Submachinegun'
			}
		},
		tech: {
			short: 'TECH',
			full: 'Tech',
			skills: {
				aeroTech: 'Aero Tech',
				avTech: 'AV Tech',
				basicTech: 'Basic Tech',
				cryotankOperation: 'Cryotank Operation',
				cyberdeckDesign: 'Cyberdeck Design',
				cyberTech: 'Cyber Tech',
				demolitions: 'Demolitions',
				disguise: 'Disguise',
				electronics: 'Electronics',
				electricalSecurity: 'Electrical Security',
				firstAid: 'First Aid',
				forgery: 'Forgery',
				gyroTech: 'Gyro Tech',
				paintDraw: 'Paint or Draw',
				photoFilm: 'Photo & Film',
				pharmaceuticals: 'Pharmaceuticals',
				pickLock: 'Pick Lock',
				pickPocket: 'Pick Pocket',
				playInstrument: 'PlayInstrument',
				weaponsmith: 'Weaponsmith'
			}
		},
		cool: {
			short: 'COOL',
			full: 'Cool',
			skills: {
				Interrogation: {
					name: 'Interrogation'
				},
				Intimidate: {
					name: 'Intimidate'
				},
				Oratory: {
					name: 'Oratory'
				},
				ResistTortureDrugs: {
					name: 'Resist Torture/Drugs'
				},
				Streetwise: {
					name: 'Streetwise'
				}
			}
		},
		attr: {
			short: 'ATTR',
			full: 'Attractiveness',
			skills: {
				PersonalGrooming: {
					name: 'Personal Grooming'
				},
				WardrobeStyle: {
					name: 'Wardrobe & Style'
				}
			}
		},
		luck: {
			short: 'LUCK',
			full: 'Luck'
		},
		ma: {
			short: 'MA',
			full: 'Movement Allowance',
			computed: {
				run: {
					name: 'RUN'
				},
				leap: {
					name: 'LEAP'
				}
			}
		},
		bt: {
			short: 'BT',
			full: 'Body Type',
			skills: {
				Endurance: {
					name: 'Endurance'
				},
				StrengthFeat: {
					name: 'Strength Feat'
				},
				Swimming: {
					name: 'Swimming'
				}
			},
			computed: {
				bt: {
					name: 'Very Weak',
					btm: 0
				},
				save: {
					name: 'save'
				},
				carry: {
					name: 'carry'
				},
				deadlift: {
					name: 'deadlift'
				}
			}
		},
		emp: {
			short: 'EMP',
			full: 'Empathy',
			skills: {
				HumanPerception: {
					name: 'Human Perception'
				},
				Interview: {
					name: 'Interview'
				},
				Leadership: {
					name: 'Leadership'
				},
				Seduction: {
					name: 'Seduction'
				},
				Social: {
					name: 'Social'
				},
				PersuasionFastTalk: {
					name: 'Persuasion & Fast Talk'
				},
				Perform: {
					name: 'Perform'
				}
			},
			computed: {
				humanity: {
					name: 'Humanity'
				}
			}
		}
	}
};

/* export interface CharsheetCP {
	name: string;
	role: role;
	stats: {
		int: {
			value: number;
			short: 'INT';
			full: 'Intellect';
			skills: {
				Accounting: {
					name: 'Accounting';
					value?: number;
				};
				Anthropology: {
					name: 'Anthropology';
					value?: number;
				};
				AwarenessNotice: {
					name: 'Awareness/Notice';
					value?: number;
				};
				Biology: {
					name: 'Biology';
					value?: number;
				};
				Botany: {
					name: 'Botany';
					value?: number;
				};
				Chemistry: {
					name: 'Chemistry';
					value?: number;
				};
				Composition: {
					name: 'Composition';
					value?: number;
				};
				DiagnoseIllness: {
					name: 'Diagnose illness';
					value?: number;
				};
				EducationGeneralKnowledge: {
					name: 'Education & General knowledge';
					value?: number;
				};
				Expert: {
					name: 'Expert';
					value?: number;
					array: skill[];
				};
				Gamble: {
					name: 'Gamble';
					value?: number;
				};
				Geology: {
					name: 'Geology';
					value?: number;
				};
				HideEvade: {
					name: 'Hide/Evade';
					value?: number;
				};
				History: {
					name: 'History';
					value?: number;
				};
				Languages: {
					name: 'Languages';
					value?: number;
					array: skill[];
				};
				LibrarySearch: {
					name: 'Library search';
					value?: number;
				};
				Mathematics: {
					name: 'Mathematics';
					value?: number;
				};
				Physics: {
					name: 'Physics';
					value?: number;
				};
				Programming: {
					name: 'Programming';
					value?: number;
				};
				ShadowTrack: {
					name: 'Shadow/Track';
					value?: number;
				};
				StockMarket: {
					name: 'Stock market';
					value?: number;
				};
				SystemKnowledge: {
					name: 'System knowledge';
					value?: number;
				};
				Teaching: {
					name: 'Teaching';
					value?: number;
				};
				WildernessSurvival: {
					name: 'Wilderness Survival';
					value?: number;
				};
				Zoology: {
					name: 'Zoology';
					value?: number;
				};
			};
		};
		ref: {
			value: number;
			short: 'REF';
			full: 'Reflexes';
			skills: {
				Archery: {
					name: 'Archery';
					value?: number;
				};
				Athletics: {
					name: 'Athletics';
					value?: number;
				};
				Brawling: {
					name: 'Brawling';
					value?: number;
				};
				Dance: {
					name: 'Dance';
					value?: number;
				};
				DodgeEscape: {
					name: 'Dodge/Escape';
					value?: number;
				};
				Driving: {
					name: 'Driving';
					value?: number;
				};
				Fencing: {
					name: 'Fencing';
					value?: number;
				};
				Handgun: {
					name: 'Handgun';
					value?: number;
				};
				HeavyWeapons: {
					name: 'Heavy Weapons';
					value?: number;
				};
				MartialArts: {
					name: 'MartialArts';
					value?: number;
					array: skill[];
				};
				Melee: {
					name: 'Melee';
					value?: number;
				};
				Motorcycle: {
					name: 'Motorcycle';
					value?: number;
				};
				OperateHeavyMachinery: {
					name: 'Operate Heavy Machinery';
					value?: number;
				};
				PilotGyro: {
					name: 'Pilot Gyro';
					value?: number;
				};
				PilotFixedWing: {
					name: 'Pilot Fixed Wing';
					value?: number;
				};
				PilotDirigible: {
					name: 'Pilot Dirigible';
					value?: number;
				};
				PilotVectorThrustVehicle: {
					name: 'Pilot Vector Thrust Vehicle';
					value?: number;
				};
				Rifle: {
					name: 'Rifle';
					value?: number;
				};
				Stealth: {
					name: 'Stealth';
					value?: number;
				};
				Submachinegun: {
					name: 'Submachinegun';
					value?: number;
				};
			};
			computed: {
				run:
			}
		};
		tech: {
			value: number;
			short: 'TECH';
			full: 'Tech';
			skils: {
				AeroTech: {
					name: 'Aero Tech';
					value?: number;
				};
				AVTech: {
					name: 'AV Tech';
					value?: number;
				};
				BasicTech: {
					name: 'Basic Tech';
					value?: number;
				};
				CryotankOperation: {
					name: 'Cryotank Operation';
					value?: number;
				};
				CyberdeckDesign: {
					name: 'Cyberdeck Design';
					value?: number;
				};
				CyberTech: {
					name: 'Cyber Tech';
					value?: number;
				};
				Demolitions: {
					name: 'Demolitions';
					value?: number;
				};
				Disguise: {
					name: 'Disguise';
					value?: number;
				};
				Electronics: {
					name: 'Electronics';
					value?: number;
				};
				ElectricalSecurity: {
					name: 'Electrical Security';
					value?: number;
				};
				FirstAid: {
					name: 'First Aid';
					value?: number;
				};
				Forgery: {
					name: 'Forgery';
					value?: number;
				};
				GyroTech: {
					name: 'Gyro Tech';
					value?: number;
				};
				PaintDraw: {
					name: 'Paint or Draw';
					value?: number;
				};
				PhotoFilm: {
					name: 'Photo & Film';
					value?: number;
				};
				Pharmaceuticals: {
					name: 'Pharmaceuticals';
					value?: number;
				};
				PickLock: {
					name: 'Pick Lock';
					value?: number;
				};
				PickPocket: {
					name: 'Pick Pocket';
					value?: number;
				};
				PlayInstrument: {
					name: 'PlayInstrument';
					value?: number;
				};
				Weaponsmith: {
					name: 'Weaponsmith';
					value?: number;
				};
			};
		};
		cool: {
			value: number;
			short: 'COOL';
			full: 'Cool';
			skills: {
				Interrogation: {
					name: 'Interrogation';
					value?: number;
				};
				Intimidate: {
					name: 'Intimidate';
					value?: number;
				};
				Oratory: {
					name: 'Oratory';
					value?: number;
				};
				ResistTortureDrugs: {
					name: 'Resist Torture/Drugs';
					value?: number;
				};
				Streetwise: {
					name: 'Streetwise';
					value?: number;
				};
			};
		};
		attr: {
			value: number;
			short: 'ATTR';
			full: 'Attractiveness';
			skills: {
				PersonalGrooming: {
					name: 'Personal Grooming';
					value?: number;
				};
				WardrobeStyle: {
					name: 'Wardrobe & Style';
					value?: number;
				};
			};
		};
		luck: {
			value: number;
			short: 'LUCK';
			full: 'Luck';
		};
		ma: {
			value: number;
			short: 'MA';
			full: 'Movement Allowance';
			computed?: {
				run: {
					name: 'RUN';
					value?: number;
				};
				leap: {
					name: 'LEAP';
					value?: number;
				};
			};
		};
		bt: {
			value: number;
			short: 'BT';
			full: 'Body Type';
			skills: {
				Endurance: {
					name: 'Endurance';
					value?: number;
				};
				StrengthFeat: {
					name: 'Strength Feat';
					value?: number;
				};
				Swimming: {
					name: 'Swimming';
					value?: number;
				};
			};
			computed?: {
				bt:
					| {
							name: 'Very Weak';
							btm: 0;
					  }
					| {
							name: 'Weak';
							btm: 1;
					  }
					| {
							name: 'Average';
							btm: 2;
					  }
					| {
							name: 'Strong';
							btm: 3;
					  }
					| {
							name: 'Very Strong';
							btm: 4;
					  }
					| {
							name: 'Superhuman';
							btm: 5;
					  };
				save: {
					name: 'save';
					value?: number;
				};
				carry: {
					name: 'carry';
					value?: number;
				};
				deadlift: {
					name: 'deadlift';
					value?: number;
				};
			};
		};
		emp: {
			value: number;
			short: 'EMP';
			full: 'Empathy';
			skills: {
				HumanPerception: {
					name: 'Human Perception';
					value?: number;
				};
				Interview: {
					name: 'Interview';
					value?: number;
				};
				Leadership: {
					name: 'Leadership';
					value?: number;
				};
				Seduction: {
					name: 'Seduction';
					value?: number;
				};
				Social: {
					name: 'Social';
					value?: number;
				};
				PersuasionFastTalk: {
					name: 'Persuasion & Fast Talk';
					value?: number;
				};
				Perform: {
					name: 'Perform';
					value?: number;
				};
			};
			computed: {
				humanity: {
					name: 'Humanity';
					value?: number;
				};
			};
		};
	};

} */

/* export class CharsheetCP implements CharsheetCP {
	constructor({ name, stats }: {
		name: string, stats: {
			int: stat, ref: stat, tech: stat, cool: stat, attr: stat, luck: stat, ma: stat, bt:stat, emp: stat
		}
	}) {
		const { int, ref, tech, cool, attr, luck, ma, bt, emp } = stats;
		this.name = name;
		//this.stats.int = int;
		//this.stats.ref = ref;
		//this.stats.tech = tech;
		//this.stats.cool = cool;
		//this.stats.attr = attr;
		//this.stats.luck = luck;
		//this.stats.ma = ma;
		//this.stats.bt = bt;
		//this.stats.emp = emp;
	};
} */
