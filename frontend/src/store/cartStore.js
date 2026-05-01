import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      
      addToCart: (product, qty = 1) => {
        const item = { ...product, qty };
        const existItem = get().cartItems.find((x) => x._id === item._id);

        if (existItem) {
          set({
            cartItems: get().cartItems.map((x) =>
              x._id === existItem._id ? { ...x, qty: x.qty + qty } : x
            ),
          });
        } else {
          set({ cartItems: [...get().cartItems, item] });
        }
      },

      removeFromCart: (id) => {
        set({
          cartItems: get().cartItems.filter((x) => x._id !== id),
        });
      },

      updateQuantity: (id, qty) => {
        set({
          cartItems: get().cartItems.map((x) =>
            x._id === id ? { ...x, qty } : x
          ),
        });
      },

      clearCart: () => set({ cartItems: [] }),

      getCartTotal: () => {
        return get().cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
      },
      
      getCartCount: () => {
        return get().cartItems.reduce((acc, item) => acc + item.qty, 0);
      }
    }),
    {
      name: 'dammys-cart-storage',
    }
  )
);
