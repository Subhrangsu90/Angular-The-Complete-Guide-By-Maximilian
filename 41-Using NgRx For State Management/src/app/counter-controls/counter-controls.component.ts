import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
// import { DecrementAction, IncrementAction } from '../store/counter.action';
import { decrement, increment } from '../store/counter.action';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  private store: Store<{ counter: number }> = inject(Store);
  increment() {
    this.store.dispatch(increment({ value: 2 }));
    // this.store.dispatch(new IncrementAction(2));
  }

  decrement() {
    this.store.dispatch(decrement({ value: 1 }));
    // this.store.dispatch(new DecrementAction(1));
  }
}
