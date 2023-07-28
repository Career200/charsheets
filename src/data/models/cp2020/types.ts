import { baseSkills } from './base';

export type AllSkills = typeof baseSkills;

export const statMap = {
	INT: 'Intellect',
	REF: 'Reflexes',
	TECH: 'Tech',
	COOL: 'Cool',
	ATTR: 'Attractiveness',
	LUCK: 'Luck',
	MA: 'Movement Allowance',
	BT: 'Body Type',
	EMP: 'Empathy'
} as const;

export type StatString = keyof typeof statMap;

export type LimitedStatString = Exclude<StatString, 'LUCK' | 'MA'>;

export type StatStringFull = (typeof statMap)[keyof typeof statMap];

export interface Skill {
	name: string;
	value?: number;
}
export interface SkillArray extends Skill {
	skills: Skill[] | undefined;
}

export type SkillsFrom<T extends StatString> = AllSkills[T];

export type intSkillsStrings = keyof SkillsFrom<'INT'>;
export type refSkillsStrings = keyof SkillsFrom<'REF'>;
export type techSkillsStrings = keyof SkillsFrom<'TECH'>;
export type coolSkillsStrings = keyof SkillsFrom<'COOL'>;
export type attrSkillsStrings = keyof SkillsFrom<'ATTR'>;
export type btSkillsStrings = keyof SkillsFrom<'BT'>;
export type empSkillsStrings = keyof SkillsFrom<'EMP'>;

export type AllSkillsStrings =
	| intSkillsStrings
	| refSkillsStrings
	| techSkillsStrings
	| coolSkillsStrings
	| attrSkillsStrings
	| btSkillsStrings
	| empSkillsStrings;

export type StatType<T extends StatString> = {
	short: StatString;
	full: StatStringFull;
	value: number;
	skills?: SkillsFrom<T>;
};

export type AllStatsType = {
	[K in StatString]: StatType<K>;
};

export type ComputedType = {
	Body:
		| { type: 'Very Weak'; btm: 0 }
		| { type: 'Weak'; btm: -1 }
		| { type: 'Average'; btm: -2 }
		| { type: 'Strong'; btm: -3 }
		| { type: 'Very Strong'; btm: -4 }
		| { type: 'Superhuman'; btm: -5 };
	move: { carry: number; deadlift: number; run: number; leap: number };
	humanityTotal: number;
};

export interface Role {
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
	special: {
		name:
			| 'Authority'
			| 'Charismatic Leadership'
			| 'Combat Sense'
			| 'Credibility'
			| 'Family'
			| 'Interface'
			| 'Jury Rig'
			| 'Medical Tech'
			| 'Resources'
			| 'Streetdeal'
			| 'Custom Special Ability';
		value?: number;
	};
}

export interface Char {
	name: string;
	role: Role;
	stats: AllStatsType;
	computed?: ComputedType;
	notes?: string;
	desc?: string;
	id?: string;
}
