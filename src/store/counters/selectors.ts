import { IStore } from "./../interfaces";

export const selectCounters = (store: IStore) => store.counters.counters;
