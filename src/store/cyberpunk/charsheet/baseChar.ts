import { computed, makeObservable, observable } from "mobx";
import { statMap } from "./types";
import { Details } from "./details/notes";
import { BaseStat } from "./baseChar/stats";
import { Role } from "./baseChar/role";
import { Health } from "./baseChar/health";
import { WithId } from "../../helpers/withId";

const defaultArmorCoverage = {
	head: 0,
	torso: 0,
	larm: 0,
	rarm: 0,
	lleg: 0,
	rleg: 0,
} as const;
type ArmorCoverage = typeof defaultArmorCoverage;

export class BaseChar extends WithId {
	handle: string;
	role: Role;
	stats: BaseStat[];
	health: Health;
	armor: ArmorCoverage;
	// cybernetics: any[] - many computed properties
	// gear: any[] - includes weapons and armor (both with computed properties)
	// lifepath: any;
	details: Details;

	constructor(
		id?: string,
		handle?: string,
		role?: Role,
		stats?: BaseStat[],
		health?: Health,
		armor?: ArmorCoverage,
		details?: Details
	) {
		super(id ?? "default");
		this.handle = handle ?? "";
		this.role = role ?? new Role();
		this.stats =
			stats ??
			Object.keys(statMap).map(
				(stat) => new BaseStat(stat as keyof typeof statMap)
			);
		this.health = health ?? new Health();
		this.armor = armor ?? defaultArmorCoverage;
		this.details = details ?? new Details();
		makeObservable(this, {
			handle: observable,
			role: observable,
			stats: observable,
			health: observable,
			armor: observable,
			details: observable,
			bodyType: computed,
			move: computed,
			humanityTotal: computed,
		});
	}
	setHandle = (handle: string) => {
		this.handle = handle;
	};
	get bodyType() {
		let Body: { type: string; btm: number };
		switch (this.stats.find((stat) => stat.short === "BT")?.value) {
			case 0:
			case 1:
			case 2: {
				Body = { type: "Very Weak", btm: 0 };
				break;
			}
			case 3:
			case 4: {
				Body = { type: "Weak", btm: -1 };
				break;
			}
			case 5:
			case 6: {
				Body = { type: "Average", btm: -2 };
				break;
			}
			case 7:
			case 8: {
				Body = { type: "Strong", btm: -3 };
				break;
			}
			case 9:
			case 10: {
				Body = { type: "Very Strong", btm: -4 };
				break;
			}
			default: {
				Body = { type: "Superhuman", btm: -5 };
			}
		}
		return Body;
	}
	get move() {
		const ma = this.stats.find((stat) => stat.short === "MA")?.value ?? 0;
		const bt = this.stats.find((stat) => stat.short === "BT")?.value ?? 0;
		return {
			carry: bt * 10,
			deadlift: bt * 40,
			run: ma * 3,
			leap: (ma * 3) / 4,
		};
	}
	get humanityTotal() {
		return (this.stats.find((stat) => stat.short === "EMP")?.value ?? 0) * 10;
	}
}

export default new BaseChar();
