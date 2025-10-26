import { Action, createReducer, on } from '@ngrx/store';
// import {
//   CounterActions,
//   DECREMENT,
//   DecrementAction,
//   INCREMENT,
//   IncrementAction,
// } from './counter.action';
import { decrement, increment, set } from './counter.action';

// Reducer : A pure function that takes the previous state and an action, and returns the next state.

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
);

// Alternatively, you can use the following syntax:
// export function counterReducer(
//   state = initialState,
//   action: CounterActions | Action
// ) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   } else if (action.type === DECREMENT) {
//     return state - (action as DecrementAction).value;
//   }
//   return state;
// }
