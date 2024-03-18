import { createContext } from "react";
type CartItem = {
  id: number;
  quantity: number;
};

type shoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  incrementCartQuantity: (id: number) => void;
  decrementCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  CartQuantity: number;
  cartItems: CartItem[];
};
const shoppingCartContext = createContext({} as shoppingCartContext);

export default shoppingCartContext;
