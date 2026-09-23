"use client";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
        );

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();

        setProducts(data.foods);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
