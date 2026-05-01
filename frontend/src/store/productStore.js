import { create } from 'zustand';
import api from '../api/axios';

export const useProductStore = create((set) => ({
  products: [],
  product: null,
  isLoading: false,
  error: null,

  fetchProducts: async (keyword = '', category = '') => {
    set({ isLoading: true, error: null });
    try {
      let query = '';
      if (keyword) query += `?keyword=${keyword}`;
      if (category) query += query ? `&category=${category}` : `?category=${category}`;
      
      const { data } = await api.get(`/products${query}`);
      set({ products: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchProductDetails: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await api.get(`/products/${id}`);
      set({ product: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  }
}));
