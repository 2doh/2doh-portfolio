import { create } from "zustand";

const useBoardStore = create(set => ({
  tool: "pen",
  color: "#2a1b07",
  lineWidth: 3,
  clearAll: 0,

  setTool: tool => set({ tool }),
  setColor: color => set({ color, tool: "pen" }),
  setLineWidth: width => set({ lineWidth: width }),
  triggerClear: () => set(state => ({ clearAll: state.clearAll + 1 })),
}));

export default useBoardStore;
