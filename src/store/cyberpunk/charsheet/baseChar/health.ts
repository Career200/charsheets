import { action, makeAutoObservable } from "mobx";

const healthStatuses = [
	"HEALTHY",
	"LIGHT",
	"SERIOUS",
	"CRITICAL",
	"MORTAL0",
	"MORTAL1",
	"MORTAL2",
	"MORTAL3",
	"MORTAL4",
	"MORTAL5",
	"MORTAL6",
] as const;
type HealthStatus = (typeof healthStatuses)[number];

export class Health {
	damage: number;
	status: HealthStatus;
	stun: number;
	constructor() {
		this.damage = 0;
		this.status = "HEALTHY";
		this.stun = 0;
		makeAutoObservable(this);
	}
	@action setDamage = (damage: number) => {
		this.damage = damage;
		// every 5th point of damage is a new status
		this.status = healthStatuses.find((_, i) => damage < i * 5) as HealthStatus;
		// stun goes from 0 to 9 for every status
		this.stun = damage % 5;
	};
}
