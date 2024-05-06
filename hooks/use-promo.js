import { create } from "zustand";

const usePromoModal = create((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
}));

export default usePromoModal;
