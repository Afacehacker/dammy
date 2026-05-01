import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../api/axios';

export const useAuthStore = create(
  persist(
    (set) => ({
      userInfo: null,
      isLoading: false,
      error: null,

      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const { data } = await api.post('/users/login', { email, password });
          set({ userInfo: data, isLoading: false });
          return data;
        } catch (error) {
          const message = error.response?.data?.message || error.message;
          set({ error: message, isLoading: false });
          throw new Error(message);
        }
      },

      register: async (name, email, password) => {
        set({ isLoading: true, error: null });
        try {
          const { data } = await api.post('/users/register', { name, email, password });
          set({ userInfo: data, isLoading: false });
          return data;
        } catch (error) {
          const message = error.response?.data?.message || error.message;
          set({ error: message, isLoading: false });
          throw new Error(message);
        }
      },

      logout: () => {
        set({ userInfo: null });
      },
    }),
    {
      name: 'dammys-auth-storage',
    }
  )
);
