import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/*
// Original example

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      { name: 'bears' },
    ),
  ),
);
*/

interface UserState {
  data: string;
  save: (usr: string) => void;
  remove: () => void;
}

export const useUsersPersistMiddlewaresStore = create<UserState>()(
  // By default 'persist' middleware uses localStorage
  persist(
    (set) => ({
      data: '',
      save: (dt) => set(() => ({ data: dt })),
      remove: () => set(() => ({ data: '' })),
    }),
    {
      name: 'persistedData', // name of the item in the storage (must be unique)
      /* storage: createJSONStorage(() => sessionStorage), */ // (optional) by default, 'localStorage' is used
    },
  ),
);
