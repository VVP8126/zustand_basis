import { User } from '../../types/User';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer'; // can work with store objects as in RTK

interface UsersWithMiddlewaresState {
  users: User[];
  isLoading: boolean;
  error: string;
  addUser: (name: string) => void;
  clear: () => void;
  fetchUsers: () => void;
}

export const useUsersWithMiddlewaresStore = create<UsersWithMiddlewaresState>()(
  immer((set) => ({
    users: [],
    isLoading: false,
    error: '',
    addUser: (name: string) =>
      set((state) => {
        state.users.push({ id: Date.now(), username: name });
      }),
    clear: () =>
      set((state) => {
        state.users = [];
      }),
    fetchUsers: async () => {
      try {
        set({ isLoading: true });
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = (await result.json()) as User[];
        set({ users: json });
      } catch (err: any) {
        set({ error: err.message });
      } finally {
        set({ isLoading: false });
      }
    },
  })),
);
