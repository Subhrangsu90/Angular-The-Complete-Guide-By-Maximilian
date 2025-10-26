import { Component, OnInit } from '@angular/core';

import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { init } from './store/counter.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CounterOutputComponent, CounterControlsComponent],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(init());
  }

  constructor(private store: Store) {}
}
