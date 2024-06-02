import { makeObservable, observable } from "mobx";

export class WithId {
	id: string;
	constructor(id: string) {
		this.id = id;
		makeObservable(this, {
			id: observable,
		});
	}
	setId = (id: string) => {
		this.id = id;
	};
}
