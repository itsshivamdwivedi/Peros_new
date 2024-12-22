"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext"; // Import CartContext
import { Trash } from "lucide-react"; // Trash icon to remove items

export default function CartPage() {
  const { user } = useAuth();
  const { cart, removeFromCart, loading } = useCart(); // Get cart items and functions from CartContext

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate total price
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading while cart data is fetched
  }

  return (
    <main className="p-5 md:p-10 bg-gray-50">
      <section className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-6">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image || "/assets/placeholder.png"} // Default image
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-sm text-gray-600">Price: ₹{item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <Trash size={20} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-2xl font-semibold">Total: ₹{calculateTotal().toFixed(2)}</span>
              <button
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
