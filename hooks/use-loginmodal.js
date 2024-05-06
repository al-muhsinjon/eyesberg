import { create } from "zustand";

const useLoginModal = create((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
}));

export default useLoginModal;
