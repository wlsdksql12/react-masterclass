import { atom } from "jotai";

export const isDarkAtom = atom(false);

export const minuteState = atom(0);

export const hourSelector = atom(
  (get) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  (get, set, update: number) => {
    console.log(update);
    const minute = update * 60;
    set(minuteState, minute);
  },
);
