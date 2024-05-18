import { ComputedType, Role } from "../../../data/models/cp2020/types";


export const computeStats = (bt: number, ma: number, emp: number) => {
	let Body: ComputedType['Body'];
	switch (bt) {
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
		carry: bt * 10,
		deadlift: bt * 40,
		run: ma * 3,
		leap: (ma * 3) / 4
	};
	const humanityTotal = emp * 10;
	const computed: ComputedType = { Body, move, humanityTotal };
	return computed;
};

export const computeSpecialAbility = (role: Role['name']) => {
	let name: Role['special']['name'];
	switch (role) {
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
	return name;
};

export const colorSwitch = (role: Role['name']) => {
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
