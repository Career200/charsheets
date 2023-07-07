type statString =
	| 'INT'
	| 'REF'
	| 'TECH'
	| 'COOL'
	| 'ATTR'
	| 'LUCK'
	| 'MA'
	| 'BT'
	| 'EMP';

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

type StatType = {
	short: statString;
	full: statMap;
	value: number;
	skills: SkillsFrom<statString>;
};
type allStatsType = {
	INT: StatType;
	REF: StatType;
	TECH: StatType;
	COOL: StatType;
	ATTR: StatType;
	LUCK: StatType;
	MA: StatType;
	BT: StatType;
	EMP: StatType;
};
type ComputedType = {
	BT: {
		type:
			| 'Very Weak'
			| 'Weak'
			| 'Average'
			| 'Strong'
			| 'Very Strong'
			| 'Superhuman';
		btm: 0 | -1 | -2 | -3 | -4 | -5;
		carry: number;
		deadlift: number;
	};
	MA: {
		run: number;
		leap: number;
	};
	EMP: {
		humanityTotal: number;
	};
};

interface Char {
	name: string;
	role: role;
	stats: allStatsType;
	computed?: ComputedType;
	notes?: string[];
	desc?: string;
}

type AllSkillsType = typeof baseSkills;

type SkillsFrom<T extends statString> = AllSkillsType[T];
type SkillStringsFrom<T extends statString> = keyof AllSkillsType[T];

type intStringsSkills = SkillStringsFrom<'INT'>;
type refStringsSkills = SkillStringsFrom<'REF'>;
type techStringsSkills = SkillStringsFrom<'TECH'>;
type coolStringsSkills = SkillStringsFrom<'COOL'>;
type attrStringsSkills = SkillStringsFrom<'ATTR'>;
type luckStringsSkills = SkillStringsFrom<'LUCK'>;
type maStringsSkills = SkillStringsFrom<'MA'>;
type btStringsSkills = SkillStringsFrom<'BT'>;
type empStringsSkills = SkillStringsFrom<'EMP'>;

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
