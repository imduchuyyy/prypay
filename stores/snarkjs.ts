import { create } from "zustand";

interface SnarkStore {
  snark: object | null;
  setSnark: (snark: object) => void;
}

const useSnark = create<SnarkStore>((set) => ({
  snark: null,
  setSnark: (snark) => set({ snark }),
}));

export default useSnark;
