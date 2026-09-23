"use client";

import FoodGrid from "@/components/ExplorePage/FoodGrid";
import PageBanner from "@/components/shared/PageBanner";
import { ProductContext } from "@/context/ProductContext";
import React, { useContext, useEffect, useState } from "react";

const ITEMS_PER_PAGE = 12;

const ExplorePage = () => {
  const { products, loading: productsLoading } = useContext(ProductContext);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  // Search API
  useEffect(() => {
    const searchFoods = async () => {
      if (!search.trim()) {
        setSearchResults([]);
        setCurrentPage(1);
        return;
      }

      try {
        setSearchLoading(true);

        const res = await fetch(
          `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${encodeURIComponent(
            search.trim(),
          )}`,
        );

        if (!res.ok) {
          throw new Error("Failed to search foods");
        }

        const data = await res.json();

        console.log("Search result:", data);

        setSearchResults(data.foods || []);
        setCurrentPage(1);
      } catch (error) {
        console.error(error);
        setSearchResults([]);
      } finally {
        setSearchLoading(false);
      }
    };

    const timer = setTimeout(() => {
      searchFoods();
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  const foods = search.trim() ? searchResults : products;

  // Pagination
  const totalPages = Math.ceil((foods?.length || 0) / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentProducts = foods?.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const loading = productsLoading || searchLoading;

  return (
    <>
      <PageBanner>Explore Delicious Food</PageBanner>

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Search */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mb-8 flex flex-col gap-2"
        >
          <h4 className="text-orange-500 pl-2 text-2xl text-center">
            Search Food
          </h4>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your favorite food..."
            className="flex-1 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </form>

        {/* Food Grid */}
        <FoodGrid foods={currentProducts || []} loading={loading} />

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {/* Previous */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium transition hover:border-orange-500 hover:text-orange-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {/* Pages */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-10 w-10 rounded-lg text-sm font-semibold transition ${
                    currentPage === page
                      ? "bg-orange-500 text-white"
                      : "border border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-500"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            {/* Next */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium transition hover:border-orange-500 hover:text-orange-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ExplorePage;
