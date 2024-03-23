import { atom } from "recoil";

export const yearState = atom({
  key: "yearState",
  default: new Date().getFullYear(),
});

export const monthState = atom({
  key: "monthState",
  default: new Date().getMonth(),
});

export const dayState = atom({
  key: "dayState",
  default: new Date().getDate(),
});
