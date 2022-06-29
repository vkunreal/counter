import { CountersActions } from "./actions";

export interface ICounter {
  id: string;
  count: number;
  hasBtns: boolean;
}

export interface ICountersState {
  counters: ICounter[];
}

// actions

// add counter
interface IAddCounter {
  type: CountersActions.ADD_COUNTER;
  payload: ICounter;
}

// remove counter
interface IRemoveCounter {
  type: CountersActions.REMOVE_COUNTER;
  payload: string;
}

// increment counter
interface IIncrementCounter {
  type: CountersActions.INCREMENT_COUNTER;
  payload: string;
}

// decrement counter
interface IDecrementCounter {
  type: CountersActions.DECREMENT_COUNTER;
  payload: string;
}

export type ICountersAction =
  | IAddCounter
  | IRemoveCounter
  | IIncrementCounter
  | IDecrementCounter;
