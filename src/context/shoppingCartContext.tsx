import { createContext } from "react";

type shoppingCartContext = {
  getItemQuantity: (id: number) => number;
  incrementCartQuantity: (id: number) => void;
  decrementCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};
const shoppingCartContext = createContext({} as shoppingCartContext);

export default shoppingCartContext;
