import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://dammys-essentials-api.onrender.com/api',
});

// Add a request interceptor to inject the auth token
api.interceptors.request.use(
  (config) => {
    // We will get the token directly from localStorage where zustand persists it
    const storeStr = localStorage.getItem('dammys-auth-storage');
    if (storeStr) {
      const { state } = JSON.parse(storeStr);
      if (state && state.userInfo && state.userInfo.token) {
        config.headers.Authorization = `Bearer ${state.userInfo.token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
