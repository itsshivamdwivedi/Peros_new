"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Firebase configuration
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuth } from "@/contexts/AuthContext"; // Importing AuthContext to get the user info

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth(); // Get user from AuthContext
  const [cart, setCart] = useState([]); // Local state for cart items
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        try {
          const userRef = doc(db, `users/${user.uid}`);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setCart(userSnap.data().carts || []);
          } else {
            setCart([]);
          }
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      } else {
        setCart([]);
      }
      setLoading(false);
    };

    fetchCart();
  }, [user]);

  const updateCart = async (updatedCart) => {
    if (user) {
      try {
        const userRef = doc(db, `users/${user.uid}`);
        await setDoc(userRef, { carts: updatedCart }, { merge: true });
        setCart(updatedCart); // Update local state with the new cart data
      } catch (error) {
        console.error("Error updating cart:", error);
      }
    }
  };

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    updateCart(updatedCart); // Sync with Firestore
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    updateCart(updatedCart); // Sync with Firestore
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
