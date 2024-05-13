import { create } from "zustand";

const useLoginModal = create((set) => ({
  open: false,
  worker: false,
  onOpen: (e) => set({ open: true, worker: e }),
  onClose: () => set({ open: false }),
}));

export default useLoginModal;
