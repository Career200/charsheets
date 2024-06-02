import { action, makeAutoObservable } from "mobx";

export class Note {
	name?: string;
	value: string;
	constructor(name: string, value = "") {
		this.name = name;
		this.value = value;
		makeAutoObservable(this);
	}
	@action updateNote = ({ name, value }: { name: string; value: string }) => {
		this.name = name;
		this.value = value;
	};
}

export class Details {
	description: string;
	notes: Note[];
	constructor(
		description: string = "I am a description. Fill me.",
		notes: Note[] = []
	) {
		this.description = description;
		this.notes = notes;
		makeAutoObservable(this);
	}
	@action setDescription = (description: string) => {
		this.description = description;
	};
	@action addNote = (note: Note) => {
		this.notes.push(note);
	};
	@action removeNote = (note: Note) => {
		this.notes = this.notes.filter((n) => n !== note);
	};
}
