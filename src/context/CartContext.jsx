"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cravora-cart");

      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (!hydrated) return;

    try {
      localStorage.setItem("cravora-cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }, [cartItems, hydrated]);

  // Add to cart
  const addToCart = (food) => {
    setCartItems((prevItems) => {
      const alreadyExists = prevItems.some((item) => item.id === food.id);

      if (alreadyExists) {
        return prevItems;
      }

      return [
        ...prevItems,
        {
          ...food,
          quantity: 1,
        },
      ];
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cravora-cart");
  };

  // Check if item is in cart
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  // Cart count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isInCart,
        cartCount,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        hydrated,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};
