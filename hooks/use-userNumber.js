import { create } from "zustand";

const useUserNumber = create((set) => ({
  user: false,
  userId: 0,
  onOpen: (e) => set({ user: true, userId: e }),
}));

export default useUserNumber;
