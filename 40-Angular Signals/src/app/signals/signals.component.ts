import { Component, computed, effect, signal } from "@angular/core";

@Component({
	selector: "app-signals",
	templateUrl: "./signals.component.html",
	imports: [],
})
export class SignalsComponent {
	actions = signal<string[]>([]);
	counter = signal(0);
	doubleCounter = computed(() => this.counter() * 2);

	constructor() {
		effect(() => console.log(this.counter()));
	}

	increment() {
		// this.counter.update((oldCounter) => oldCounter + 1);
		this.counter.set(this.counter() + 1);
		this.actions.update((oldActions) => [...oldActions, "INCREMENT"]);
		// this.actions.push("INCREMENT");
	}

	decrement() {
		this.counter.update((oldCounter) => oldCounter - 1);
		this.actions.update((oldActions) => [...oldActions, "DECREMENT"]);
		// this.actions.push("DECREMENT");
	}
}
