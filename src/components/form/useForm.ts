import { create } from "zustand";

interface FormState {
  step: number;
  data: Record<string, any>;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (values: Record<string, any>) => void;
}

export const useFormStore = create<FormState>((set) => ({
  step: 1,
  data: {},
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  updateData: (values) =>
    set((state) => ({ data: { ...state.data, ...values } })),
}));
