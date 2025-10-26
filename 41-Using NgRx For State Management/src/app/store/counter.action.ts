import { Action, createAction, props } from '@ngrx/store';

export const init = createAction('[Counter] Init');

export const set = createAction('[Counter] Set', props<{ value: number }>());

export const increment = createAction(
  '[Counter] Increment',
  props<{ value: number }>()
);

export const decrement = createAction(
  '[Counter] Decrement',
  props<{ value: number }>()
);

// Alternatively, you can use the following syntax:

// export const INCREMENT = '[Counter] Increment';
// export const DECREMENT = '[Counter] Decrement';

// export class IncrementAction implements Action {
//   readonly type: string = INCREMENT;

//   constructor(public value: number) {}
// }

// export class DecrementAction implements Action {
//   readonly type: string = DECREMENT;

//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction | DecrementAction;
