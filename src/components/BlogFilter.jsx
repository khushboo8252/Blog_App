import React from "react";
export default function BlogFilters({ search, setSearch }) {
    return (
      <input
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
    );
  }
  