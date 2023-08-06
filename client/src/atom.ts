import { atom } from "recoil";
import { bookData } from "./api/api";
import { RecoilState } from "recoil";

export const booksState: RecoilState<bookData[]> = atom({
  key: "booksState",
  default: [] as bookData[],
});

export const isLoadingState: RecoilState<boolean> = atom({
  key: "isLoadingState",
  default: false,
});
