import { CountersActions } from "./actions";
import { ICountersState, ICountersAction } from "./interfaces";

const initState: ICountersState = {
  counters: [],
};

export const countersReducer = (
  state = initState,
  { type, payload }: ICountersAction
): ICountersState => {
  let newCounters;

  switch (type) {
    // add counter
    case CountersActions.ADD_COUNTER:
      const count = state.counters.reduce(
        (acc, counter) => acc + counter.count,
        0
      );

      return {
        ...state,
        counters: [...state.counters, { ...payload, count }],
      };

    // remove counter
    case CountersActions.REMOVE_COUNTER:
      newCounters = state.counters.filter((counter) => counter.id !== payload);

      return {
        ...state,
        counters: newCounters,
      };

    // increment counter
    case CountersActions.INCREMENT_COUNTER:
      newCounters = state.counters.map((counter) => {
        if (counter.id === payload) counter.count++;

        return counter;
      });

      return {
        ...state,
        counters: newCounters,
      };

    // decrement counter
    case CountersActions.DECREMENT_COUNTER:
      newCounters = state.counters.map((counter) => {
        if (counter.id === payload) counter.count > 0 && counter.count--;

        return counter;
      });

      return {
        ...state,
        counters: newCounters,
      };

    default:
      return state;
  }
};
