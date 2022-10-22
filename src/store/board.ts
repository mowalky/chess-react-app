import create from "zustand";

const useStore = create((set) => ({
  board: {},
  wCaptured: [],
  wMoveHistory: [],
  bCaptured: [],
  bMoveHistory: [],
}));

export const useBoardStore = useStore;
