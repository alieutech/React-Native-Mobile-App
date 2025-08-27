import { create } from "zustand";
import { PRODUCTS } from "../../assets/products";

type CartItem = {
  id: number;
  title: string;
  heroImage: string;
  price: number;
  quantity: number;
  maxQuantity?: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  getItemCount: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      const maxQuantity =
        PRODUCTS.find((p) => String(p.id) === String(item.id))?.maxQuantity ||
        item.quantity;

      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id
              ? {
                  ...i,
                  quantity: Math.min(i.quantity + item.quantity, maxQuantity),
                  maxQuantity,
                }
              : i
          ),
        };
      }
      return { items: [...state.items, { ...item, maxQuantity }] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  incrementItem: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.maxQuantity
          ? {
              ...item,
              quantity: Math.min(item.quantity + 1, item.maxQuantity),
            }
          : item
      ),
    })),

  decrementItem: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  getItemCount: () =>
    get().items.reduce((count, item) => count + item.quantity, 0),

  getTotalPrice: () =>
    get().items.reduce((total, item) => total + item.price * item.quantity, 0),

  clearCart: () => set({ items: [] }),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.maxQuantity
          ? { ...item, quantity: Math.min(quantity, item.maxQuantity) }
          : item
      ),
    })),
}));
