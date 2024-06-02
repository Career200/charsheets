import { makeObservable, observable } from "mobx";
import { statMap } from "../types";
import { baseSkills } from "../../../../data/models/cp2020/base";
import { WithValue } from "../../../helpers/withValue";

export class BaseStat extends WithValue {
	readonly short: keyof typeof statMap;
	readonly full: (typeof statMap)[keyof typeof statMap];
	skills: BaseSkill[] | undefined;

	constructor(short: keyof typeof statMap, value = 5) {
		super(value);
		this.short = short;
		this.full = statMap[short];
		this.skills = Object.values(baseSkills[short] ?? {}).map(
			(skill) => new BaseSkill(skill.name)
		);
		makeObservable(this, {
			skills: observable,
		});
	}
}
export class BaseSkill extends WithValue {
	readonly name: string;

	constructor(name: string, value = 0) {
		super(value);
		this.name = name;
	}
}
