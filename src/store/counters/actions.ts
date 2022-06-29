import { ICounter } from "./interfaces";

export enum CountersActions {
  ADD_COUNTER = "COUNTERS::ADD_COUNTER",
  REMOVE_COUNTER = "COUNTERS::REMOVE_COUNTER",
  INCREMENT_COUNTER = "COUNTERS::INCREMENT_COUNTER",
  DECREMENT_COUNTER = "COUNTERS::DECREMENT_COUNTER",
}

export const addCounter = (counter: ICounter) => ({
  type: CountersActions.ADD_COUNTER,
  payload: counter,
});

export const removeCounter = (id: string) => ({
  type: CountersActions.REMOVE_COUNTER,
  payload: id,
});

export const incrementCounter = (id: string) => ({
  type: CountersActions.INCREMENT_COUNTER,
  payload: id,
});

export const decrementCounter = (id: string) => ({
  type: CountersActions.DECREMENT_COUNTER,
  payload: id,
});
