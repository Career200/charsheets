/* export class stat<T extends keyof typeof statMap> {
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
		switch (stat) {
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
		}
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
}  */

/* export class CharsheetCP implements Char {
	name: string,

	constructor({ name, stats }) {
		this.name = name;
	}
}
 */
