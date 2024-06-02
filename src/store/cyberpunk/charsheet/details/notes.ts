import { makeAutoObservable } from "mobx";

export class Details {
	description: string;
	notes: string;
	constructor(
		description: string = "I am a description. Fill me.",
		notes = ""
	) {
		this.description = description;
		this.notes = notes;
		makeAutoObservable(this);
	}
	setDescription = (description: string) => {
		this.description = description;
	};
	setNotes = (notes: string) => {
		this.notes = notes;
	};
}
