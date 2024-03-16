import { ReactNode, useContext, useState } from "react";
import shoppingCartContext from "./shoppingCartContext";

type useShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};
const useShoppingCart = () => {
  return useContext(shoppingCartContext);
};

export function useShoppingCartProvider({
  children,
}: useShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  function decrementCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function incrementCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <shoppingCartContext.Provider
      value={{
        getItemQuantity,
        incrementCartQuantity,
        decrementCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}

export default useShoppingCart;
