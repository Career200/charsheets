import { makeObservable, observable } from "mobx";

export class WithValue {
	value: number;
	constructor(value = 0) {
		this.value = value;
		makeObservable(this, {
			value: observable,
		});
	}
	setValue = (value: number) => {
		this.value = value;
	};
	increaseValue = () => {
		this.value++;
	};
	decreaseValue = () => {
		this.value--;
	};
}
