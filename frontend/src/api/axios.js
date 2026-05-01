import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend port is 5000 based on server.js
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
