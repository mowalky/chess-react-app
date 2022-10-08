import create from "zustand";

const useStore = create((set) => ({
  board: {},
}));

export const useBoardStore = useStore;
