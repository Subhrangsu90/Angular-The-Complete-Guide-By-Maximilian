import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(`clickCount: ${this.clickCount()}`);
    // });
  }

  ngOnInit(): void {
    // const subscription = interval(2000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe({
    //     next: (value) => console.log(value),
    //   });
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });

    const subscription = this.clickCount$.subscribe({
      next: (value) =>
        console.log(`Clicked button clicked ${this.clickCount()} times`),
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
