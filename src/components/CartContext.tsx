"use client"
import React, { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  name: string;
  variant: string;
  size: string;
  price: number;
  quantity: number;
  image:string;
  id:string;

};

type CartContextType = {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    updateCartItemQuantity: (index: number, quantity:number) => void;
    removeFromCart: (index: number) => void;
    addToCart: (item: CartItem) => void;
  };

  

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) =>
          cartItem.name === item.name &&
          cartItem.image === item.image &&
          cartItem.variant === item.variant &&
          cartItem.size === item.size 
       
      );
  
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity;
        
        return updatedCart;
      }

      
  
      return [...prevCart, item];
    });
  };
  

  const updateCartItemQuantity = (index: number, quantity: number) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].quantity = quantity;
      return newCart;
    });
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, updateCartItemQuantity, removeFromCart, addToCart }}>
      {children}
      
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
