import { User } from '../../types/User';
import { create } from 'zustand';

interface UsersState {
  users: User[];
  addUser: (username: string) => void;
  clear: () => void;
}

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  addUser: (username: string) =>
    set((state) => ({
      users: [...state.users, { id: Date.now(), username }],
    })),
  clear: () =>
    set(() => ({
      users: [],
    })),
}));
