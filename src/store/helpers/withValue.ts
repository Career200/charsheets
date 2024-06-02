import { action, makeAutoObservable } from "mobx";

export class WithValue {
	value: number;
	constructor(value = 0) {
		this.value = value;
		makeAutoObservable(this);
	}
	@action setValue = (value: number) => {
		this.value = value;
	};
	@action increaseValue = () => {
		this.value++;
	};
	@action decreaseValue = () => {
		this.value--;
	};
}
