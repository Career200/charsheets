import { action, makeAutoObservable } from "mobx";
import { BaseSkill } from "./stats";
import { role, roleSpecialMap } from "../types";

export class Role {
	name: role;
	special: BaseSkill;
	constructor(role: role = "SOLO") {
		this.name = role;
		this.special = new BaseSkill(roleSpecialMap[role]);
		makeAutoObservable(this);
	}
	@action setRole = (role: role) => {
		if (role === this.name) return;
		this.name = role;
		this.special = new BaseSkill(roleSpecialMap[role], this.special.value);
	};
}
