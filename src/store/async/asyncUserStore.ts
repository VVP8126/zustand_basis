import { User } from '../../types/User';
import { create } from 'zustand';

interface AsyncUsersState {
  users: User[];
  isLoading: boolean;
  error: string;
  fetchUsers: () => void;
}

export const useAsyncUsersStore = create<AsyncUsersState>((set) => ({
  users: [],
  isLoading: false,
  error: '',
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
}));
